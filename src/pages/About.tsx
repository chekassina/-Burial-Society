import {
  Building2,
  ShieldCheck,
  HeartPulse,
  FileBadge,
  Users,
  ArrowRight,
  Award
} from 'lucide-react';

import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/3.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-[#0b335c]/85"></div>

        <div className="relative z-10 py-28 px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              About TFI Burial Society
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Providing dignity, protection, and peace of mind to South African
              families through affordable funeral cover solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/image/4.jpg"
                alt="TFI Burial Society"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/60 to-transparent"></div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0b335c] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award size={18} />
                Trusted Funeral Protection
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Supporting Families When It Matters Most
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                TFI Burial Society is a trusted provider of comprehensive funeral
                policies designed to give families peace of mind during life's
                most difficult moments.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to making funeral cover affordable, accessible,
                and reliable for individuals, couples, children, and extended
                families across South Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Partners */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <img
                  src="/image/5.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Building2 className="w-10 h-10 mb-3" />

                  <h3 className="text-3xl font-bold">
                    Our Mission
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  To offer affordable, reliable, and respectful funeral cover
                  that ensures every family can provide a dignified farewell to
                  their loved ones without financial strain.
                </p>
              </div>
            </motion.div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <img
                  src="/image/6.jpg"
                  alt="Trusted Partners"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <ShieldCheck className="w-10 h-10 mb-3" />

                  <h3 className="text-3xl font-bold">
                    Trusted Partners
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our funeral policies are securely underwritten by industry
                  leaders <strong>Old Mutual</strong> and <strong>RMA</strong>,
                  ensuring reliable cover and fast claims processing for our
                  members.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-20 px-4 bg-[#f8fbff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regulatory Information
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparency and compliance are at the heart of our operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* FSP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-sm"
            >
              <div className="relative h-64">
                <img
                  src="/image/17.jpg"
                  alt="Financial Services Provider"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <FileBadge className="w-10 h-10 mb-3" />

                  <h3 className="text-3xl font-bold">
                    Financial Services Provider
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  TFI Brokers (Pty) Ltd is a juristic representative operating
                  under House of Administration (Pty) Ltd., an authorised
                  Financial Services Provider (FSP No. 50841).
                </p>
              </div>
            </motion.div>

            {/* Marketed By */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-green-100 shadow-sm"
            >
              <div className="relative h-64">
                <img
                  src="/image/18.jpg"
                  alt="Dignify Funeral Solutions"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <HeartPulse className="w-10 h-10 mb-3" />

                  <h3 className="text-3xl font-bold">
                    Marketed By
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our products are proudly marketed by{" "}
                  <strong>Dignify Funeral Solutions</strong>, dedicated agents
                  trained to provide compassionate guidance and support for
                  families planning for the future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users size={18} />
              Our Core Values
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Why Families Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Cover",
                image: "/image/4.jpg",
                desc: "Flexible funeral plans designed to suit every budget."
              },
              {
                title: "Fast Claims",
                image: "/image/5.jpg",
                desc: "Quick and reliable claims processing during difficult times."
              },
              {
                title: "Compassionate Service",
                image: "/image/19.jpg",
                desc: "Dedicated support from experienced funeral consultants."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/image/9.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b335c]/90 to-[#1e5b9f]/90"></div>

            <div className="relative z-10 p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Have Questions About Our Services?
              </h2>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Our compliance and support teams are available to answer your
                questions and help you choose the right funeral cover.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl"
              >
                Get in Touch
                <ArrowRight size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}