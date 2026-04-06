/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, required) - Guest name
      - `email` (text, required) - Guest email
      - `phone` (text, optional) - Guest phone number
      - `date_time` (timestamptz, required) - Preferred tour date and time
      - `guests` (integer, required) - Number of guests
      - `tour_type` (text, required) - Selected tour type
      - `notes` (text, optional) - Additional notes from guest
      - `status` (text, required) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - Timestamp of booking request
      
  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to insert bookings (public form submission)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  date_time timestamptz NOT NULL,
  guests integer NOT NULL DEFAULT 1,
  tour_type text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);