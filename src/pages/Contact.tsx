import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Shield,
  ArrowRight
} from 'lucide-react';

import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agentName: '',
    agentCell: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/3.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-[#0b335c]/85"></div>

        <div className="relative z-10 py-24 px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              Contact TFI Burial Society
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Get in touch with us for funeral cover quotes, claims support,
              and policy assistance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Top Image */}
              <div className="relative h-64">
                <img
                  src="/image/4.jpg"
                  alt="Contact TFI Burial Society"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/90 via-[#0b335c]/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    Get in Touch
                  </h2>

                  <p className="text-blue-100">
                    We're here to help you and your family.
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="p-8 space-y-6">
                {/* Phone */}
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0b335c] shrink-0">
                    <PhoneCall size={26} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Phone & WhatsApp
                    </h4>

                    <p className="text-gray-600 mt-1">
                      Call: 0800 123 456
                    </p>

                    <p className="text-gray-600">
                      WhatsApp: +27 71 234 5678
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0b335c] shrink-0">
                    <Mail size={26} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Email Address
                    </h4>

                    <p className="text-gray-600 mt-1">
                      info@tfisociety.co.za
                    </p>

                    <p className="text-gray-600">
                      claims@tfisociety.co.za
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0b335c] shrink-0">
                    <MapPin size={26} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Office Address
                    </h4>

                    <p className="text-gray-600 mt-1">
                      123 Main Road, Suite 4B
                      <br />
                      Sandton, Johannesburg
                      <br />
                      2000, South Africa
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-4 rounded-2xl bg-green-50 border border-green-100">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                    <Clock size={26} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Business Hours
                    </h4>

                    <p className="text-gray-600 mt-1">
                      Mon - Fri: 08:00 - 17:00
                    </p>

                    <p className="text-gray-600">
                      Sat & Sun: Closed
                    </p>

                    <p className="text-sm font-semibold text-green-700 mt-2">
                      Claims Support Available 24/7
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Form Header Image */}
              <div className="relative h-72">
                <img
                  src="/image/5.jpg"
                  alt="Request a Funeral Quote"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/90 via-[#0b335c]/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-8 h-8" />

                    <h2 className="text-3xl font-bold">
                      Request a Quote
                    </h2>
                  </div>

                  <p className="text-blue-100">
                    Fill in the form and our consultants will contact you.
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-8 text-center">
                    <Shield className="mx-auto mb-4 w-14 h-14 text-green-700" />

                    <h4 className="text-2xl font-bold mb-3">
                      Thank You!
                    </h4>

                    <p className="text-lg">
                      Your request has been submitted successfully.
                    </p>

                    <p className="mt-2 text-green-700">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name + Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Full Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sipho Nkosi"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0b335c] outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Cell Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 071 234 5678"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0b335c] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Agent Info */}
                    <div className="grid md:grid-cols-2 gap-6 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                      <div>
                        <label className="block text-sm font-semibold text-[#0b335c] mb-2">
                          Agent Name (Optional)
                        </label>

                        <input
                          type="text"
                          name="agentName"
                          value={formData.agentName}
                          onChange={handleChange}
                          placeholder="Agent Name"
                          className="w-full px-4 py-3 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-[#0b335c] outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0b335c] mb-2">
                          Agent Cell Number
                        </label>

                        <input
                          type="tel"
                          name="agentCell"
                          value={formData.agentCell}
                          onChange={handleChange}
                          placeholder="Agent Phone Number"
                          className="w-full px-4 py-3 bg-white border border-blue-200 rounded-2xl focus:ring-2 focus:ring-[#0b335c] outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        How can we help you?
                      </label>

                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="I am interested in a family funeral plan..."
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#0b335c] outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="bg-[#0b335c] hover:bg-[#15467e] text-white py-4 px-8 rounded-2xl font-bold transition-all inline-flex items-center gap-3 shadow-lg"
                    >
                      Send Message
                      <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/image/6.jpg"
              alt="Office Location"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0b335c]/50"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur p-8 rounded-3xl shadow-2xl text-center max-w-md">
                <MapPin className="mx-auto mb-4 text-[#0b335c] w-12 h-12" />

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Visit Our Office
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  123 Main Road, Suite 4B
                  <br />
                  Sandton, Johannesburg
                  <br />
                  South Africa
                </p>

                <button className="mt-6 bg-[#0b335c] hover:bg-[#15467e] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                  Open Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}