import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data/mockData';

interface PricingProps {
  onNavigateTo?: (tabId: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateTo }) => {
  return (
    <section className="bg-[#f6f3ed] text-[#252525] h-full overflow-y-auto py-8 sm:py-12" aria-labelledby="pricing-heading">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-[10px] tracking-[0.28em] text-[#9a7d45] mb-3">PRICE GUIDE</p>
            <h2 id="pricing-heading" className="font-display text-3xl sm:text-5xl font-semibold text-[#252525] mb-3">
              料金・制作水準
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-7">
              ご依頼内容に応じた料金と制作内容の目安です。必要な範囲を伺って、正式なお見積もりをご案内します。
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden border-y border-[#b5965a]/45 bg-[#fbfaf7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#b5965a]/35 bg-[#eee8dc]/65">
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-[#252525]">
                    サービス
                  </th>
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-[#252525]">
                    料金
                  </th>
                  <th className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-[#252525] hidden sm:table-cell">
                    制作内容
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans.map((plan, index) => (
                  <motion.tr
                    key={plan.id}
                    className="border-b border-[#b5965a]/20 last:border-b-0 hover:bg-[#f5f0e6] transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-[#252525]">
                      {plan.service}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold text-[#806636]">
                      {plan.priceRange}
                    </td>
                    <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm text-stone-600 hidden sm:table-cell">
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
              <p className="text-stone-600 mb-4">まずはお気軽にご相談ください</p>
              <motion.button
                onClick={() => onNavigateTo('contact')}
                className="px-8 py-4 bg-[#252525] text-white rounded-sm font-semibold text-lg hover:bg-[#45433e] transition-colors"
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
