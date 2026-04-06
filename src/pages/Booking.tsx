import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateTime: '',
    guests: '1',
    tourType: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          date_time: formData.dateTime,
          guests: parseInt(formData.guests),
          tour_type: formData.tourType,
          notes: formData.notes || null,
        },
      ]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        dateTime: '',
        guests: '1',
        tourType: '',
        notes: '',
      });
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      console.error('Error submitting booking:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="mb-8">
            <CheckCircle size={64} className="text-gray-900 mx-auto" />
          </div>
          <h2 className="text-4xl font-display text-gray-900 mb-6">
            <span className="italic">Message received</span>
          </h2>
          <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
            I will personally confirm your booking within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/sunsets/97E1860B-8BD5-4C36-A159-D00D1E1F842F.JPG"
            alt="Swiss sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-display text-white mb-4 leading-tight">
            <span className="italic">Let's plan your trip</span>
          </h1>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 bg-stone-50">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Tell me about your trip. I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm border border-stone-200 p-8 sm:p-10 space-y-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
                placeholder="John Doe"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
                  placeholder="+41"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dateTime" className="block text-sm font-light text-gray-700 mb-2">
                  Preferred date
                </label>
                <input
                  type="date"
                  id="dateTime"
                  name="dateTime"
                  required
                  value={formData.dateTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-light text-gray-700 mb-2">
                  Number of guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="tourType" className="block text-sm font-light text-gray-700 mb-2">
                Which experience?
              </label>
              <select
                id="tourType"
                name="tourType"
                required
                value={formData.tourType}
                onChange={handleChange}
                className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition font-light"
              >
                <option value="">Choose...</option>
                <option value="free-walking-tour">Free Walking Tour</option>
                <option value="private-walking-tour">Private Experience</option>
                <option value="private-walking-tour-photo">Private Experience + Photos</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-light text-gray-700 mb-2">
                Tell me about your trip <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border-0 border-b-2 border-stone-200 bg-transparent focus:border-gray-900 outline-none transition resize-none font-light"
                placeholder="Any questions or special requests?"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50/80 border border-red-200">
                <p className="text-red-700 text-sm font-light">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light mb-4">Or reach out directly</p>
          <div className="space-y-2 font-light">
            <p className="text-gray-700">
              <Mail size={16} className="inline mr-2" />
              info@gobartostours.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
