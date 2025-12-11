import React, { useEffect, useRef } from 'react';

interface Props {
  slot: string;
  className?: string;
}

const AdsenseBlock: React.FC<Props> = ({ slot, className }) => {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore in dev / SSR
    }
  }, []);

  return (
    <ins
      ref={adRef as any}
      className={`adsbygoogle ${className || ''}`}
      style={{ display: 'block' }}
      data-ad-client="ca-pub-3559865379099936"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseBlock;
