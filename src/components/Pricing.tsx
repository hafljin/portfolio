import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data/mockData';

interface PricingProps {
  onNavigateTo?: (tabId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateTo }) => {
  return (
    <section className="bg-business.base text-business.light h-full overflow-y-auto py-6" aria-labelledby="pricing-heading">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-bold text-business.accent mb-2 sm:mb-3">
              料金目安
            </h2>
            <p className="text-base sm:text-lg text-business.light/80 max-w-2xl mx-auto">
              内容により変わります。まずはお気軽にお問い合わせください。
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-xl border border-business.accent/30 bg-business.navy shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-business.accent/30 bg-business.accent/10">
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-business.light">
                    サービス
                  </th>
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-business.light">
                    目安
                  </th>
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-business.light hidden sm:table-cell">
                    備考
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <motion.tr
                    key={plan.id}
                    className="border-b border-business.accent/20 last:border-b-0"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-business.light">
                      {plan.service}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-business.accent">
                      {plan.priceRange}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-business.light/80 hidden sm:table-cell">
                      {plan.note}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {onNavigateTo && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-business.light mb-4">まずはお気軽にご相談ください</p>
              <motion.button
                onClick={() => onNavigateTo('contact')}
                className="px-8 py-4 bg-business.green text-white rounded-lg font-semibold text-lg hover:bg-business.green/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせはこちら
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
