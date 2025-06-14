import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_m1snpnf',     // Replace with your actual EmailJS service ID
        'template_vgey2jq',    // Replace with your actual EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'B7xi6pFWAk9h262nQ'      // Replace with your EmailJS public key
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-teal-500/10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Interested in hiring or discussing a potential opportunity? I'd love to connect and explore how I can contribute to your team.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">harshithdoppalapudi@gmail.com</p>
              <a href="mailto:harshithdoppalapudi@gmail.com" className="inline-block mt-3 text-teal-600 dark:text-teal-400 hover:underline">
                Send an email
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400">+1 (812) 974-2104</p>
              <a href="tel:+18129742104" className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">
                Call me
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Location</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">United States</p>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Send Me a Message</h3>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center">
                  <div className="mr-3 flex-shrink-0">✓</div>
                  <p>Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center">
                  <div className="mr-3 flex-shrink-0">✕</div>
                  <p>There was an error sending your message. Please try again later.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition"
                    placeholder="Your Subject"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-900 outline-none transition resize-none"
                    placeholder="Your message..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-300 flex items-center gap-2 font-medium"
                  >
                    <Send size={18} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}