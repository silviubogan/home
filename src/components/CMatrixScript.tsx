'use client';
import Script from 'next/script';

export const CMatrixScript = function () {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/cmatrix"
      strategy="beforeInteractive" // intentional
    />
  );
};