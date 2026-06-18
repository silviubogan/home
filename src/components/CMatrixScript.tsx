'use client';
import Script from 'next/script';

export const CMatrixScript = function () {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      src="https://cdn.jsdelivr.net/npm/cmatrix"
      strategy="beforeInteractive" // intentional
    />
  );
};