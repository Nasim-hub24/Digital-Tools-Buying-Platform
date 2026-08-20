import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import StatsBand from './components/StatsBand';
import MainSection from './components/MainSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import ClosingCTA from './components/ClosingCTA';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        {/* 1. Sticky Navbar */}
        <Navbar />

        <main className="flex-grow">
          {/* 2. Hero Banner */}
          <HeroBanner />

          {/* 3. Stats Section (Solid Brand Color Band) */}
          <StatsBand />

          {/* 4. Main Section (Product Catalog & Cart View with centered Toggle) */}
          <MainSection />

          {/* 5. Steps Section ("How It Works") */}
          <StepsSection />

          {/* 6. Pricing Section (Plan Comparison Cards) */}
          <PricingSection />

          {/* Extra: FAQ Section */}
          <FAQSection />

          {/* 7. Closing CTA Band */}
          <ClosingCTA />
        </main>

        {/* 8. Dark Footer */}
        <Footer />

        {/* Global Toast Notification Container */}
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </CartProvider>
  );
}
