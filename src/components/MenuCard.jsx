import { motion } from 'framer-motion';

const MenuCard = ({ icon, title, description, items, badge }) => {
  return (
    <motion.section
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[32px] border border-[rgba(200,155,60,0.18)] bg-white/80 p-6 shadow-soft backdrop-blur-sm transition"
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cream border border-[rgba(200,155,60,0.18)] text-3xl text-luxe shadow-soft">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#7d6a48]">
            <span>{badge}</span>
            <span className="inline-block h-px w-10 bg-[#d4b27a]" />
          </div>
          <h3 className="mt-3 font-serif text-3xl uppercase tracking-[0.12em] text-ink">{title}</h3>
          {description ? <p className="mt-3 text-sm leading-7 text-[#3f3f3f]">{description}</p> : null}
        </div>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-4 border-b border-[rgba(17,17,17,0.06)] pb-4 last:border-b-0 last:pb-0">
            <div>
              <p className="flex items-center gap-3 text-base font-semibold text-ink">
                <span
                  className={`inline-flex h-3.5 w-3.5 rounded-full ${
                    item.type === 'veg' ? 'bg-[#2FA33B]' : 'bg-[#C93A27]'
                  }`}
                />
                {item.name}
              </p>
            </div>
            <p className="text-base font-medium text-[#2c2620]">{item.price}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MenuCard;
