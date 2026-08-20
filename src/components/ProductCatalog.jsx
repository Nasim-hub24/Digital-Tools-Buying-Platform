import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from './ProductCard';
import { Search, Filter } from 'lucide-react';

export default function ProductCatalog() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by tag and search query
  const filteredProducts = productsData.filter((product) => {
    const matchesTag = selectedTag === 'all' || product.tagType === selectedTag;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const categories = [
    { label: 'All Tools', value: 'all' },
    { label: 'Popular', value: 'popular' },
    { label: 'Best Sellers', value: 'bestseller' },
    { label: 'New Releases', value: 'new' },
    { label: 'Featured', value: 'featured' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedTag(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedTag === cat.value
                  ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search templates & tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 transition-all text-slate-800 placeholder-slate-400"
          />
        </div>

      </div>

      {/* Product Grid: 3 cols on desktop, 2 cols on tablet, 1 col on mobile (CARD-1 & CARD-6) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-base font-medium">No tools found matching your search.</p>
          <button
            onClick={() => { setSelectedTag('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 text-sm font-semibold text-brand-600 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
