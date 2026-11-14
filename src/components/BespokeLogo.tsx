import React from 'react';

interface BespokeLogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

export function BespokeLogo({ className = 'w-10 h-10', variant = 'default' }: BespokeLogoProps) {
  const outerStroke = variant === 'light' ? '#FFFFFF' : '#15181C';
  const accentStroke = variant === 'light' ? '#4DB6A8' : '#135D54';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Geometric Architectural Seal */}
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke={outerStroke}
        strokeWidth="1.2"
        strokeDasharray="1.5 3.5"
        opacity="0.65"
      />
      <circle cx="32" cy="32" r="26" stroke={outerStroke} strokeWidth="1.8" />

      {/* Upright Monogram Structure ('M') */}
      <path
        d="M19 44V24L32 37L45 24V44"
        stroke={outerStroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Architectural Apex ('A') */}
      <path
        d="M23 44L32 18L41 44"
        stroke={accentStroke}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 36H38"
        stroke={accentStroke}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Keystone Diamond Accent */}
      <polygon points="32,14.5 34.5,18.5 32,22.5 29.5,18.5" fill={accentStroke} />

      {/* Foundation Baseline */}
      <path
        d="M16 46H48"
        stroke={outerStroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
