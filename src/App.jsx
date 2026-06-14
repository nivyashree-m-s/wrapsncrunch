import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar.jsx';
import MenuCard from './components/MenuCard.jsx';
import heroImage from './assets/hero-image.jpeg';
import watermarkLogo from './assets/brand-logo.svg?url';

const categoryData = [
  {
    id: 'shawarma',
    title: 'Shawarma',
    badge: '1',
    icon: '🌀',
    items: [
      { name: 'Classic Shawarma', price: '₹109', type: 'nonveg' },
      { name: 'Peri Peri Shawarma', price: '₹119', type: 'nonveg' },
      { name: 'Shawarma with French Fries', price: '₹149', type: 'nonveg' },
      { name: 'Shawarma with Fried Chicken', price: '₹149', type: 'nonveg' },
      { name: 'Plate Shawarma', price: '₹159', type: 'nonveg' }
    ]
  },
  {
    id: 'egg-specials',
    title: 'Egg Specials',
    badge: '2',
    icon: '🥚',
    items: [{ name: 'Omelette with Chicken Sheerva', price: '₹69', type: 'nonveg' }]
  },
  {
    id: 'sides',
    title: 'Sides',
    badge: '3',
    icon: '🍟',
    items: [
      { name: 'Potato Twister', price: '₹89', type: 'veg' },
      { name: 'French Fries', price: '₹69', type: 'veg' }
    ]
  },
  {
    id: 'chicken-bites',
    title: 'Chicken Bites',
    badge: '4',
    icon: '🍗',
    items: [
      { name: 'Chicken Wings', price: '₹120 / ₹180', type: 'nonveg' },
      { name: 'Chicken Strips', price: '₹100', type: 'nonveg' },
      { name: 'Chicken Popcorn', price: '₹100 / ₹160', type: 'nonveg' }
    ]
  },
  {
    id: 'chips',
    title: 'Build Your Own Chips',
    badge: '5',
    icon: '🥔',
    items: [
      { name: 'Fresh vegetables, sauces & premium toppings', price: '₹79', type: 'veg' },
      { name: 'Shawarma Chicken', price: '₹99', type: 'nonveg' },
      { name: 'Fried Chicken', price: '₹129', type: 'nonveg' }
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    badge: '6',
    icon: '🍔',
    items: [
      { name: 'Crispy Chicken Burger', price: '₹139', type: 'nonveg' },
      { name: 'Double Chicken Burger', price: '₹199', type: 'nonveg' },
      { name: 'Mini Burger', price: '₹149', type: 'nonveg' }
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('menu');

  const filteredCards = useMemo(() => categoryData, []);

  const categoryTabs = [
    { label: 'All', value: 'all' },
    { label: 'Shawarma', value: 'shawarma' },
    { label: 'Sides', value: 'sides' },
    { label: 'Chicken Bites', value: 'chicken-bites' },
    { label: 'Burgers', value: 'burgers' }
  ];

  const [activeTab, setActiveTab] = useState('all');

  const cardsToShow = useMemo(() => {
    const result = filteredCards.filter((card) => activeTab === 'all' || card.id === activeTab);
    return result.length ? result : filteredCards;
  }, [activeTab, filteredCards]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <NavBar active={activeSection} setActive={setActiveSection} />

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-6 md:px-8">
        <section className="relative overflow-hidden rounded-[48px] border border-[rgba(200,155,60,0.18)] bg-hero-wave bg-cream/90 px-6 py-10 shadow-soft md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,155,60,0.12),_transparent_35%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.85fr)] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(200,155,60,0.35)] bg-white/90 px-5 py-3 text-sm uppercase tracking-[0.4em] text-[#665439] shadow-soft">
                <span className="h-3 w-3 rounded-full bg-green-600" /> VEGETARIAN
                <span className="h-3 w-3 rounded-full bg-red-600" /> NON VEGETARIAN
              </div>
              <div className="max-w-xl rounded-[32px] border border-[rgba(200,155,60,0.15)] bg-white/90 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-[#7d6a48]">WELCOME TO</p>
                <h1 className="mt-4 text-4xl font-serif uppercase tracking-[0.15em] text-ink sm:text-5xl">WRAPS N CRUNCH</h1>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[40px] border border-[rgba(200,155,60,0.18)] bg-white/10 p-5 shadow-soft md:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/50 to-transparent pointer-events-none" />
              <img src={heroImage} alt="Wraps N Crunch menu preview" className="relative h-full w-full rounded-[32px] object-cover opacity-80" />
            </div>
          </div>
        </section>

        <section id="menu" className="relative mt-14 space-y-8">
          <div
            className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: `url(${watermarkLogo})`,
              backgroundSize: '55%',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="flex flex-wrap justify-center gap-3 text-sm text-[#2b2218]">
            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`rounded-full border px-4 py-2 transition ${
                  activeTab === tab.value ? 'border-luxe bg-luxe/10 text-luxe' : 'border-[rgba(17,17,17,0.1)] bg-white/90 text-ink hover:border-luxe/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {cardsToShow.map((category) => (
              <MenuCard key={category.id} icon={category.icon} title={category.title} badge={category.badge} items={category.items} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[rgba(200,155,60,0.18)] bg-ink px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.18em]">WRAPS N CRUNCH</p>
            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#d4b27a]">Wrap • Bite • Repeat</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#d4b27a]">
            <a href="https://instagram.com/WrapsnCrunch" target="_blank" rel="noreferrer" className="transition hover:text-white/80">@WrapsnCrunch</a>
            <a href="tel:+917795289303" className="transition hover:text-white/80">+91 77952 89303</a>
            <a href="https://www.google.com/maps/search/?api=1&query=HSR+Layout+Bengaluru+560102" target="_blank" rel="noreferrer" className="transition hover:text-white/80">HSR Layout, Bengaluru</a>
          </div>
          <p className="text-sm text-[#a88c49]">Copyright © 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
