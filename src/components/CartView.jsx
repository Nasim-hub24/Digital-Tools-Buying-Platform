import React from 'react';
import { 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  FileText, 
  Layout, 
  Layers, 
  Code2, 
  Share2, 
  TrendingUp, 
  Search, 
  Palette,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const iconMap = {
  FileText,
  Layout,
  Sparkles,
  Layers,
  Code2,
  Share2,
  TrendingUp,
  Search,
  Palette
};

export default function CartView() {
  const { cartItems, removeFromCart, checkout, cartTotal, setActiveTab } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Your Cart is Empty</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-base">
          Looks like you haven't added any digital tools to your cart yet. Explore our curated catalog to accelerate your workflow.
        </p>
        <button
          onClick={() => setActiveTab('products')}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-brand-600/25 transition-all duration-200 hover:scale-[1.02]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Digital Tools</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Cart Items List (Single-Column per PRD CART-1) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              Selected Digital Tools ({cartItems.length})
            </h3>
            <button
              onClick={() => setActiveTab('products')}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Browsing</span>
            </button>
          </div>

          <div className="space-y-3">
            {cartItems.map((item) => {
              const ItemIcon = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-brand-200"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                    {/* Item Icon */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Item Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {item.name}
                        </h4>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Instant License
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Remove Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex-shrink-0">
                    <div className="text-left sm:text-right">
                      <span className="text-lg font-black text-slate-900">${item.price}</span>
                      <span className="text-[10px] text-slate-400 block font-medium">one-time</span>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 sm:p-2.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-100 sm:border-transparent hover:border-rose-200 transition-all duration-200"
                      title="Remove product"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Order Summary & Checkout */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg shadow-slate-200/50 sticky top-28 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Order Summary</h3>

            <div className="space-y-3.5 text-sm text-slate-600 border-b border-slate-100 pb-5">
              <div className="flex justify-between">
                <span>Items Subtotal ({cartItems.length})</span>
                <span className="font-semibold text-slate-900">${cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Instant Digital Delivery</span>
                <span className="font-semibold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Applicable Taxes</span>
                <span className="font-semibold text-slate-900">$0.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-sm font-medium text-slate-500 block">Total Due</span>
                <span className="text-3xl font-black text-slate-900">${cartTotal}</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% Satisfaction Guarantee
              </span>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              id="proceed-checkout-btn"
              onClick={checkout}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 active:from-brand-800 text-white font-bold text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <CreditCard className="w-5 h-5" />
              <span>Proceed to Checkout</span>
            </button>

            {/* Security Guarantee */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>Instant download link sent to email immediately</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
