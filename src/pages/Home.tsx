import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  HeartHandshake,
  FileText,
  Award,
  PhoneForwarded
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const features = [
    {
      title: "Flexible Cover Options",
      image: "/image/4.jpg",
      desc: "Choose a plan that fits your family's unique needs and budget."
    },
    {
      title: "Affordable Premiums",
      image: "/image/3.jpg",
      desc: "High-value cover starting from as little as R39 per month."
    },
    {
      title: "Extended Family Protection",
      image: "/image/12.jpg",
      desc: "Add up to 13 extended family members to your policy easily."
    },
    {
      title: "Trusted Funeral Support",
      image: "/image/7.jpg",
      desc: "Marketed by Dignify Funeral Solutions for complete peace of mind."
    },
    {
      title: "Fast Claims Process",
      image: "/image/2.jpg",
      desc: "We process valid claims within 48 hours to ease your burden."
    },
    {
      title: "Reliable Customer Service",
      image: "/image/8.jpg",
      desc: "Our dedicated team is always ready to assist via call or WhatsApp."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0b335c] text-white overflow-hidden py-24 sm:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/5.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-[#0b335c]/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium border border-blue-500/30">
              <Shield size={16} /> Underwritten by Old Mutual & RMA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Affordable{" "}
              <span className="text-blue-300">
                Funeral Cover
              </span>{" "}
              for You and Your Family
            </h1>

            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              Flexible funeral plans from TFI Burial Society with cover options
              for individuals, spouses, children, and extended family members.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>

              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-lg backdrop-blur-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg rotate-12">
                Fast!
              </div>

              <h3 className="text-[#0b335c] text-2xl font-bold mb-2">
                Request a Quick Quote
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                Fill in your details and we'll get back to you shortly.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b335c] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b335c] focus:border-transparent outline-none transition-all"
                    placeholder="071 234 5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Needed For
                  </label>

                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0b335c] focus:border-transparent outline-none transition-all bg-white">
                    <option>Just Myself</option>
                    <option>Me and My Spouse</option>
                    <option>My Immediate Family</option>
                    <option>Extended Family</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#0b335c] hover:bg-[#15467e] text-white py-3.5 rounded-lg font-bold transition-colors mt-2 text-lg"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Trusted By
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24 opacity-60 grayscale">
            <div className="text-xl font-bold flex items-center gap-2">
              <Award className="text-gray-900" />
              Dignify Funeral Solutions
            </div>

            <div className="text-xl font-bold flex items-center gap-2">
              <Shield className="text-gray-900" />
              Old Mutual
            </div>

            <div className="text-xl font-bold flex items-center gap-2">
              <HeartHandshake className="text-gray-900" />
              RMA
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#0b335c] text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose TFI Burial Society?
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              We provide dignified, reliable, and affordable cover to ensure
              your loved ones are protected when they need it most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="rounded-3xl overflow-hidden relative shadow-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/image/3.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b335c]/90 to-[#1e5b9f]/90"></div>

            <div className="relative z-10 p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Protect Your Family?
              </h2>

              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                View our full range of funeral plans and find the perfect cover
                for you and your loved ones today.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/plans"
                  className="bg-white text-[#0b335c] hover:bg-gray-50 px-8 py-4 rounded-lg font-bold transition-all shadow-md flex items-center justify-center gap-2 text-lg"
                >
                  View Plans & Pricing <FileText size={20} />
                </Link>

                <Link
                  to="/contact"
                  className="bg-green-600 text-white hover:bg-green-700 border border-green-500 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <PhoneForwarded size={20} />
                  Contact an Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}