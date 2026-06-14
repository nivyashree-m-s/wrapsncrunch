import { motion } from 'framer-motion';

const navItems = [
  { label: 'Menu', id: 'menu' },
  { label: 'Contact', id: 'contact' }
];

const NavBar = ({ active, setActive }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-[rgba(200,155,60,0.2)] bg-cream/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-ink">
          <div className="h-11 w-11 rounded-2xl border border-luxe bg-white/90 shadow-soft flex items-center justify-center text-lg font-semibold text-luxe">
            W
          </div>
          <div>
            <p className="font-serif text-xl tracking-[0.2em]">WRAPS N CRUNCH</p>
            <p className="mt-1 text-xs tracking-[0.4em] text-[#3b302a]">Wrap • Bite • Repeat</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActive(item.id);
              }}
              className={`rounded-full border border-transparent px-4 py-2 text-sm font-medium transition ${
                active === item.id ? 'bg-luxe text-white shadow-soft' : 'text-ink hover:border-luxe/60 hover:text-luxe'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

    </motion.header>
  );
};

export default NavBar;
