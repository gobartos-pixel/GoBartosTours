/*
  # Fix RLS Policy Security Issue

  ## Changes Made

  **RLS Policy Improvement for Bookings Table**
  - Drop the overly permissive RLS policy that allows unrestricted access
  - Create new restrictive policy that validates booking data:
    - Ensures required fields are present and not empty
    - Validates email format contains '@'
    - Ensures guests count is reasonable (1-50)
    - Ensures status is always 'pending' for new submissions
    - Prevents injection of unauthorized statuses
  - This maintains public submission capability while enforcing data integrity

  ## Security Benefits
  - Prevents submission of bookings with invalid data
  - Blocks attempts to create bookings with 'confirmed' or other privileged statuses
  - Validates email format to reduce spam/invalid submissions
  - Enforces reasonable guest count limits
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit booking requests" ON bookings;

-- Create a secure policy that validates booking data
CREATE POLICY "Public can submit valid booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure all required fields are present and not empty
    name IS NOT NULL AND trim(name) != '' AND
    email IS NOT NULL AND trim(email) != '' AND email LIKE '%@%' AND
    date_time IS NOT NULL AND
    guests IS NOT NULL AND guests >= 1 AND guests <= 50 AND
    tour_type IS NOT NULL AND trim(tour_type) != '' AND
    -- Force status to be 'pending' for all new submissions
    status = 'pending'
  );