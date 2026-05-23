import { useState } from 'react';
import {
  singleMemberPlans,
  memberAndChildrenPlans,
  memberAndSpousePlans,
  familyPlans,
  extendedFamilyPlans,
  childBenefits
} from '../data';

import {
  ArrowRight,
  Shield,
  Users,
  HeartHandshake
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PricingTable = ({
  title,
  description,
  image,
  data
}: {
  title: string;
  description: string;
  image: string;
  data: any[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-12 hover:shadow-xl transition-all"
  >
    {/* Image Header */}
    <div className="relative h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/90 via-[#0b335c]/40 to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100 text-lg">{description}</p>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 font-semibold">Age</th>
            <th className="px-6 py-4 font-semibold">R5,000</th>
            <th className="px-6 py-4 font-semibold">R10,000</th>
            <th className="px-6 py-4 font-semibold">R15,000</th>
            <th className="px-6 py-4 font-semibold">R20,000</th>
            <th className="px-6 py-4 font-semibold bg-green-50 text-green-800">
              R30,000
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 font-semibold text-gray-900">
                {row.age}
              </td>

              <td className="px-6 py-4">{row.R5000}</td>
              <td className="px-6 py-4">{row.R10000}</td>
              <td className="px-6 py-4">{row.R15000}</td>
              <td className="px-6 py-4">{row.R20000}</td>

              <td className="px-6 py-4 bg-green-50/40 font-bold text-green-700">
                {row.R30000}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default function Plans() {
  const [activeTab, setActiveTab] = useState('standard');

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
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
              Flexible Funeral Plans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Choose the perfect funeral cover for yourself and your loved ones
              with transparent pricing and affordable monthly premiums.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex bg-white rounded-2xl shadow-sm border border-gray-200 p-2 mb-12 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab('standard')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'standard'
                ? 'bg-[#0b335c] text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Core Plans
          </button>

          <button
            onClick={() => setActiveTab('extended')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'extended'
                ? 'bg-[#0b335c] text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Extended Benefits
          </button>
        </div>

        {/* Core Plans */}
        {activeTab === 'standard' && (
          <div>
            <PricingTable
              title="Single Member Plan"
              description="Affordable protection for individuals."
              image="/image/4.jpg"
              data={singleMemberPlans}
            />

            <PricingTable
              title="Member & Children Plan"
              description="Cover for yourself and your dependent children."
              image="/image/16.jpg"
              data={memberAndChildrenPlans}
            />

            <PricingTable
              title="Member & Spouse Plan"
              description="Comprehensive protection for couples."
              image="/image/6.jpg"
              data={memberAndSpousePlans}
            />

            <PricingTable
              title="Family Plan"
              description="Complete funeral cover for the whole family."
              image="/image/9.jpg"
              data={familyPlans}
            />
          </div>
        )}

        {/* Extended Plans */}
        {activeTab === 'extended' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Extended Family */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="relative h-72">
                <img
                  src="/image/8.jpg"
                  alt="Extended Family Cover"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b335c]/90 via-[#0b335c]/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8" />
                    <h3 className="text-3xl font-bold">
                      Extended Family Cover
                    </h3>
                  </div>

                  <p className="text-blue-100">
                    Add additional family members to your funeral policy.
                  </p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {[
                  {
                    title: "Member + 5",
                    data: extendedFamilyPlans.memberPlus5
                  },
                  {
                    title: "Member + 7",
                    data: extendedFamilyPlans.memberPlus7
                  },
                  {
                    title: "Member + 9",
                    data: extendedFamilyPlans.memberPlus9
                  },
                  {
                    title: "Member + 13",
                    data: extendedFamilyPlans.memberPlus13
                  }
                ].map((bundle, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                  >
                    <h4 className="font-bold text-[#0b335c] text-lg mb-4">
                      {bundle.title}
                    </h4>

                    <div className="grid grid-cols-3 gap-3">
                      {bundle.data.map((item, j) => (
                        <div
                          key={j}
                          className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm"
                        >
                          <div className="text-sm text-gray-500 mb-1">
                            {item.age}
                          </div>

                          <div className="font-bold text-[#0b335c]">
                            {item.premium}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Child Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden sticky top-24 h-fit"
            >
              <div className="relative h-72">
                <img
                  src="/image/9.jpg"
                  alt="Child Benefits"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-700/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <HeartHandshake className="w-8 h-8" />

                    <h3 className="text-3xl font-bold">
                      Child Benefits
                    </h3>
                  </div>

                  <p className="text-green-100">
                    Cover percentages based on selected cover amount.
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {childBenefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 rounded-2xl bg-green-50 border border-green-100"
                    >
                      <span className="font-semibold text-gray-700">
                        {benefit.age}
                      </span>

                      <span className="font-bold text-green-700 bg-white px-4 py-2 rounded-xl shadow-sm">
                        {benefit.percentage}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                  <Shield className="w-12 h-12 text-[#0b335c] mx-auto mb-4" />

                  <h4 className="font-bold text-gray-900 text-xl mb-2">
                    Need a Custom Quote?
                  </h4>

                  <p className="text-gray-500 mb-6">
                    Speak to one of our consultants today.
                  </p>

                  <Link
                    to="/contact"
                    className="w-full bg-[#0b335c] hover:bg-[#15467e] text-white py-4 px-6 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-2"
                  >
                    Contact an Agent <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}