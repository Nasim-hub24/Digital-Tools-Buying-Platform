import React from 'react';
import { 
  Check, 
  ShoppingCart, 
  CheckCircle, 
  FileText, 
  Layout, 
  Sparkles, 
  Layers, 
  Code2, 
  Share2, 
  TrendingUp, 
  Search, 
  Palette,
  Star,
  Download
} from 'lucide-react';
import { useCart } from '../context/CartContext';

// Map string icon names to Lucide icons
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

// Tag badge styling helper based on tagType
const getTagBadgeStyle = (tagType) => {
  switch (tagType) {
    case 'popular':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'bestseller':
      return 'bg-rose-100 text-rose-700 border-rose-200';
    case 'new':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'featured':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    default:
      return 'bg-brand-100 text-brand-700 border-brand-200';
  }
};

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const alreadyInCart = isInCart(product.id);

  // Icon component lookup
  const ProductIcon = iconMap[product.icon] || Sparkles;

  return (
    <div className={`flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 p-5 sm:p-7 relative group hover:shadow-card-hover hover:-translate-y-1.5 ${
      alreadyInCart ? 'border-brand-300 ring-2 ring-brand-500/20 bg-brand-50/20' : 'border-slate-200/90'
    }`}>
      
      {/* Top Section: Icon, Tag Badge & Info */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-4">
          {/* Product Icon Box */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
            <ProductIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Tag Badge */}
          <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full border ${getTagBadgeStyle(product.tagType)}`}>
            {product.tag}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Ratings & Downloads Meta */}
        <div className="flex items-center gap-3 sm:gap-4 mt-3 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-slate-700">{product.rating || '4.9'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>{product.downloads || '10k+'} downloads</span>
          </div>
        </div>

        {/* Feature List */}
        <div className="mt-4 sm:mt-5 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included Features:</p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Price & Buy Now Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-slate-900">${product.price}</span>
            <span className="text-xs text-slate-500 font-medium">/{product.period}</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold block">Instant Access</span>
        </div>

        {/* Buy Now / In Cart Button */}
        <button
          onClick={() => addToCart(product)}
          disabled={alreadyInCart}
          className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
            alreadyInCart
              ? 'bg-slate-100 text-emerald-700 border border-emerald-300/80 cursor-default'
              : 'bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white shadow-md shadow-brand-600/20 hover:shadow-brand-600/35 active:scale-95'
          }`}
          aria-label={alreadyInCart ? `${product.name} is in cart` : `Buy ${product.name}`}
        >
          {alreadyInCart ? (
            <>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Buy Now</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
