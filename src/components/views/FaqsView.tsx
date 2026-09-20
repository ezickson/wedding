import React, { useState } from 'react';
import { FAQS } from '../../data/weddingData';
import { FaqItem } from '../../types';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

export const FaqsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First expanded by default

  const categories = ['All', 'Schedule & Attire', 'Travel & Lodging', 'Invitations & Meals', 'General'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-10">
      {/* Header */}
      <div className="text-center space-y-2 sm:space-y-3">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#55728f] font-semibold">
          Helpful Details
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#24394d] font-normal">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#5d7388] max-w-xl mx-auto leading-relaxed">
          Everything you need to know about celebrating with us at Wychmere Beach Club, from dress codes and shuttle times to Cape Cod weather.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-3 sm:space-y-4">
        {/* Search input */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-[#758eac] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., dress code, parking)..."
            className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 rounded-full bg-white/90 border border-[#ded4be] text-xs text-[#2b4055] placeholder-[#8098af] focus:outline-none focus:ring-2 focus:ring-[#4a6b8c] shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8299af] hover:text-[#2a3e54]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories - horizontal scroll on mobile */}
        <div className="flex items-center sm:justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#4a6b8c] text-white'
                  : 'bg-white/80 hover:bg-[#f2ece0] text-[#50687e] border border-[#dcd3bd]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-2.5 sm:space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 sm:py-12 bg-white/70 rounded-2xl border border-[#ded5be] p-4 sm:p-6 text-xs text-[#637d96]">
            No matching questions found. Try searching a different keyword or contact us directly below!
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white/90 border border-[#ded5be] rounded-xl overflow-hidden transition-all shadow-2xs hover:border-[#4a6b8c]/50"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-3.5 sm:p-6 flex items-start justify-between gap-3 sm:gap-4 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-0.5 sm:space-y-1 pr-1 sm:pr-2">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6a849d] font-semibold">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-2xl text-[#22384c] font-normal leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded-full bg-[#f4eee2] text-[#4a6b8c] shrink-0 mt-0.5">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-3.5 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-[#4c657d] leading-relaxed border-t border-[#f2ebe0]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
