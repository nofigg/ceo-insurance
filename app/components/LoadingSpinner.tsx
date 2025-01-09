'use client';

import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-12 h-12">
        {/* Static background circle */}
        <div className="absolute w-12 h-12 border-4 border-[#e5e7eb] rounded-full"></div>
        {/* Spinning overlay */}
        <div className="absolute w-12 h-12 border-4 border-[#1e3a6d] rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
