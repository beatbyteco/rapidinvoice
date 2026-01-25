'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Google AdSense Banner Component
 */
export const AdBanner = ({ variant = 'horizontal', className, slot }) => {
  const adRef = useRef(null);
  const isAdLoaded = useRef(false);

  const sizeConfig = {
    horizontal: {
      className: 'w-full max-w-[320px] min-h-[100px] md:max-w-[728px] md:min-h-[90px]',
      mobileStyle: { minWidth: '280px', minHeight: '100px', maxWidth: '320px' },
      desktopStyle: { minWidth: '468px', minHeight: '90px', maxWidth: '728px' },
      format: 'horizontal',
    },
    vertical: {
      className: 'w-[160px] min-h-[600px]',
      mobileStyle: { minWidth: '160px', minHeight: '600px' },
      desktopStyle: { minWidth: '160px', minHeight: '600px' },
      format: 'vertical',
    },
    square: {
      className: 'w-full max-w-[300px] min-h-[250px]',
      mobileStyle: { minWidth: '250px', minHeight: '250px' },
      desktopStyle: { minWidth: '250px', minHeight: '250px' },
      format: 'rectangle',
    },
    responsive: {
      className: 'w-full min-h-[100px] md:min-h-[90px]',
      mobileStyle: { minHeight: '100px' },
      desktopStyle: { minHeight: '90px' },
      format: 'auto',
    },
  };

  const config = sizeConfig[variant];

  useEffect(() => {
    if (!slot || isAdLoaded.current) return;

    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [slot]);

  if (!slot) {
    return (
      <>
        {/* Mobile placeholder */}
        <div
          className={cn(
            'md:hidden bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center text-muted-foreground text-sm',
            'w-full max-w-[320px] h-25',
            className
          )}
        >
          <div className="text-center p-2">
            <p className="font-medium text-xs opacity-70">Ad Space</p>
            <p className="text-xs opacity-50">320×100</p>
          </div>
        </div>

        {/* Desktop placeholder */}
        <div
          className={cn(
            'hidden md:flex bg-muted/30 border border-dashed border-border rounded-lg items-center justify-center text-muted-foreground text-sm',
            'w-full max-w-182 h-22.5',
            className
          )}
        >
          <div className="text-center p-2">
            <p className="font-medium text-xs opacity-70">Ad Space</p>
            <p className="text-xs opacity-50">728×90</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Mobile Ad */}
      <div
        ref={adRef}
        className={cn(
          'md:hidden flex items-center justify-center overflow-hidden',
          'w-full max-w-[320px] h-25',
          className
        )}
        aria-label="Advertisement"
        role="complementary"
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '320px', height: '100px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="horizontal"
        />
      </div>

      {/* Desktop Ad */}
      <div
        className={cn(
          'hidden md:flex items-center justify-center overflow-hidden',
          'w-full max-w-182 h-22.5',
          className
        )}
        aria-label="Advertisement"
        role="complementary"
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '728px', height: '90px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format="horizontal"
        />
      </div>
    </>
  );
};

/**
 * In-Article Ad Component
 */
export const InArticleAd = ({ slot, className }) => {
  const adRef = useRef(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (!slot || isAdLoaded.current) return;

    try {
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [slot]);

  if (!slot) {
    return (
      <div
        className={cn(
          'my-8 p-6 bg-muted/30 border border-dashed border-border rounded-lg text-center',
          className
        )}
      >
        <p className="text-xs text-muted-foreground">In-Article Ad Space</p>
      </div>
    );
  }

  return (
    <div
      ref={adRef}
      className={cn('my-8', className)}
      aria-label="Advertisement"
      role="complementary"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  );
};
