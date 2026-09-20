import React, { useState } from 'react';
import { Sliders, CheckCircle2, Eye, EyeOff, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface FeatureFlagBannerProps {
  rsvpPublished: boolean;
  onToggle: () => void;
  onNavigateToRsvp: () => void;
}

export const FeatureFlagBanner: React.FC<FeatureFlagBannerProps> = ({
  rsvpPublished,
  onToggle,
  onNavigateToRsvp,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside aria-label="Couple planner controls" className="bg-[#f2eee3] border-b border-[#ded5be] text-[#34485d] text-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2.5">
        <div className="flex flex-row items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          {/* Status Label */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="p-1 rounded bg-[#e3dbc7] text-[#425a74] shrink-0">
              <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
            <div className="text-[10px] sm:text-xs">
              <span className="hidden sm:inline font-semibold tracking-wide uppercase text-[11px] text-[#2c3f54]">
                Couple's Feature Flag:
              </span>{' '}
              <span className="text-[#55697d]">
                RSVP:{' '}
                <strong className={rsvpPublished ? 'text-emerald-700' : 'text-amber-800'}>
                  {rsvpPublished ? 'Live' : 'Draft Flag'}
                </strong>
              </span>
            </div>
          </div>

          {/* Quick Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
            <button
              onClick={onToggle}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-colors shadow-2xs ${
                rsvpPublished
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-[#517091] hover:bg-[#405c7a] text-white'
              }`}
              id="btn-toggle-feature-flag"
            >
              {rsvpPublished ? (
                <>
                  <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">Published</span>
                  <span className="xs:hidden">Live</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="hidden xs:inline">Draft</span>
                  <span className="xs:hidden">Draft</span>
                </>
              )}
            </button>

            <button
              onClick={onNavigateToRsvp}
              className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white hover:bg-[#faf7f2] border border-[#d2c9b4] text-[10px] sm:text-[11px] font-medium text-[#3b5168] transition-colors"
              id="btn-preview-rsvp"
            >
              Preview
            </button>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 text-[#6b8096] hover:text-[#2a3c4f]"
              aria-label="Toggle banner info"
            >
              {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {!collapsed && (
          <div className="mt-2 pt-2 border-t border-[#e2d8c3] text-[11px] text-[#5b6f84] flex items-start gap-1.5 leading-relaxed">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#517091]" />
            <span>
              Per your criteria, the <strong>RSVP tab</strong> is feature-flagged for your initial launch so guests can view your Save the Date, Wychmere venue info, hotels, and schedule first. When you are ready to mail formal invitations, simply toggle this flag to make the personalized guest list and meal preferences live!
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};
