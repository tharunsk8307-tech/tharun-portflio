import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const norm = name.toLowerCase();

  // Python
  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M63.7 3.5c-29 0-27.2 12.6-27.2 12.6l.03 13.1h27.6v3.9H25.3S3.7 30.7 3.7 63.8c0 33.2 18.9 32 18.9 32h11.3v-15.8s-.6-18.9 18.6-18.9h27.3v-19s.8-22.1-26.1-22.1zm-14.8 9.9c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z" fill="#387EB8"/>
        <path d="M64.3 124.5c29 0 27.2-12.6 27.2-12.6l-.03-13.1H63.9v-3.9h38.8s21.6 2.4 21.6-30.7c0-33.2-18.9-32-18.9-32h-11.3v15.8s.6 18.9-18.6 18.9H48.2v19s-.8 22.1 26.1 22.1zm14.8-9.9c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" fill="#FFE052"/>
      </svg>
    );
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 115 102" fill="none">
        <circle cx="57.5" cy="51" r="10.5" fill="#61DAFB"/>
        <ellipse cx="57.5" cy="51" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" />
        <ellipse cx="57.5" cy="51" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 57.5 51)" />
        <ellipse cx="57.5" cy="51" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 57.5 51)" />
      </svg>
    );
  }

  // Google Gemini API / LLM
  if (norm.includes('gemini') || norm.includes('llm') || norm.includes('language model')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8"/>
            <stop offset="0.5" stopColor="#818CF8"/>
            <stop offset="1" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // C++
  if (norm === 'c++' || norm.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M116.8 60.9L66.7 11.6c-1.5-1.5-3.9-1.5-5.4 0L11.2 60.9c-1.5 1.5-1.5 3.9 0 5.4l50.1 49.3c1.5 1.5 3.9 1.5 5.4 0l50.1-49.3c1.5-1.5 1.5-4 0-5.4z" fill="#00599C"/>
        <path d="M64 36.6c-14.7 0-26.6 11.9-26.6 26.6S49.3 89.8 64 89.8c10.8 0 20.2-6.5 24.3-15.8h-12c-2.7 3.8-7.2 6.3-12.3 6.3-8.3 0-15-6.7-15-15s6.7-15 15-15c5.1 0 9.6 2.5 12.3 6.3h12C84.2 43.1 74.8 36.6 64 36.6z" fill="#FFFFFF"/>
        <path d="M89.7 58.7h5.8v-5.8h4.4v5.8h5.8v4.4h-5.8v5.8h-4.4v-5.8h-5.8v-4.4zm18.3 0h5.8v-5.8h4.4v5.8h5.8v4.4h-5.8v5.8h-4.4v-5.8h-5.8v-4.4z" fill="#004482"/>
      </svg>
    );
  }

  // C
  if (norm === 'c') {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M116.8 60.9L66.7 11.6c-1.5-1.5-3.9-1.5-5.4 0L11.2 60.9c-1.5 1.5-1.5 3.9 0 5.4l50.1 49.3c1.5 1.5 3.9 1.5 5.4 0l50.1-49.3c1.5-1.5 1.5-4 0-5.4z" fill="#A8B9CC"/>
        <path d="M64 36.6c-14.7 0-26.6 11.9-26.6 26.6S49.3 89.8 64 89.8c10.8 0 20.2-6.5 24.3-15.8h-12c-2.7 3.8-7.2 6.3-12.3 6.3-8.3 0-15-6.7-15-15s6.7-15 15-15c5.1 0 9.6 2.5 12.3 6.3h12C84.2 43.1 74.8 36.6 64 36.6z" fill="#283593"/>
      </svg>
    );
  }

  // Java
  if (norm.includes('java') && !norm.includes('script')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M47.7 89.5s-4.6 2.8 3.3 3.7c9.5 1.2 14.5 1.1 25.1-.9 0 0 3.6 2.2 8.7 4.1-30.8 12.5-58.1-1.3-37.1-6.9zm-4.4-13.8s-4.8 3.7 2.7 4.7c9.9 1.4 17.5 1.7 30.7-.7 0 0 2.5 1.6 6.3 3.5-36.8 12.7-65.7-.3-39.7-7.5zM61 54.3c3.5 4 4.3 6.6 4.3 6.6s-12.4 3.2-22.7 3.9c-14.5.9-2.5-7.3 18.4-10.5zm2.7-13.8s6.3 2.5 6.3 7.8c0 7.4-8.8 8.8-13 13.4 0 0 6.6-1.5 10.7-3.9 6.8-3.9 7.8-8.2 4.1-12.7-3.3-4.2-8.1-4.6-8.1-4.6z" fill="#E76F00"/>
        <path d="M78.6 100.8c-20.7 4-43.2 2.7-43.2 2.7s-3.5 1.6 3.8 2.8c11.9 2 24.9 1.6 37.1-.6 10.1-1.8 12.9-4 12.9-4s-4.4-.7-10.6-.9zm-38.3 11.8s-3.2 1.4 3.7 2.2c10.3 1.2 21.6 1.1 33.7-.4 8.7-1.1 12.2-2.9 12.2-2.9s-4 .5-9.6.6c-13.1.2-28.7-.3-40-1.5z" fill="#5382A1"/>
      </svg>
    );
  }

  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
        <path d="M67.3 100c2.4 4 6 6.5 11.6 6.5 6 0 9.8-3 9.8-7.2 0-5-4-6.8-10.7-9.8l-3.7-1.6c-10.6-4.5-17.6-10.2-17.6-22.8 0-11.3 8.7-20 22.3-20 9.7 0 16.7 3.4 21.4 11.8l-10.5 6.8c-2.3-4.2-5-6-10.6-6-4.6 0-7.8 2.8-7.8 6.3 0 4.4 3.4 6.2 9.5 8.8l3.7 1.6c12.7 5.4 19.3 11 19.3 24 0 13.8-10.8 21.6-25.5 21.6-14.3 0-23.2-6.8-27.5-15.6l10.3-5.6zM26.2 98.7c2 3.3 4.3 5.7 8.6 5.7 4.4 0 7.2-1.8 7.2-8.7V46h13.7v50.2c0 14.3-8.3 20.8-21.2 20.8-11.4 0-18-5.8-21.5-12.7l13.2-5.6z" fill="#000000"/>
      </svg>
    );
  }

  // Vue.js
  if (norm.includes('vue')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M78.8 10L64 35.6 49.2 10H0l64 111 64-111H78.8z" fill="#42B883"/>
        <path d="M78.8 10L64 35.6 49.2 10H25.6L64 76.5 102.4 10H78.8z" fill="#35495E"/>
      </svg>
    );
  }

  // HTML5
  if (norm.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.9 122l-44.8-9.5z" fill="#E44D26"/>
        <path d="M64 113.8l36.6-7.8 7.9-88.7H64v96.5z" fill="#F16529"/>
        <path d="M64 51.5h-17l-1.2-13.4H64V25H31.7l3.5 39.8H64V51.5zm0 37.3l-.1.1-14.2-3.8-.9-10.3H35.6l1.8 20.2L64 102.6v-13.8z" fill="#EBEBEB"/>
        <path d="M63.9 51.5V64.8H80l-1.5 17-14.6 3.9v13.8l26.7-7.4 3.7-40.6H63.9zm0-26.5v13.1h33.6l1.2-13.1H63.9z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // CSS3
  if (norm.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.9 122l-44.8-9.5z" fill="#1572B6"/>
        <path d="M64 113.8l36.6-7.8 7.9-88.7H64v96.5z" fill="#33A9DC"/>
        <path d="M64 51.5h16.2l1.2-13.4H64V25h33.4l-.3 3.3-3.2 36.5H64v-13.3zm0 37.3l.1.1 14.2-3.8.9-10.3h13.2l-1.8 20.2L64 102.6v-13.8z" fill="#FFFFFF"/>
        <path d="M63.9 51.5v13.3H47.8l-1.5 17 14.6 3.9v13.8l-26.7-7.4-3.7-40.6h33.4zm0-26.5v13.1H30.3l-1.2-13.1h34.8z" fill="#EBEBEB"/>
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 25.6c-25.6 0-38.4 12.8-38.4 38.4 12.8-12.8 25.6-9.6 38.4 0 12.8 9.6 25.6 12.8 38.4 0 0-25.6-12.8-38.4-38.4-38.4zm-38.4 38.4C0 64 0 89.6 25.6 89.6c12.8-9.6 25.6-12.8 38.4 0 0-25.6-12.8-38.4-38.4-38.4-12.8 12.8-25.6 9.6-25.6-12.8z" fill="#38BDF8"/>
      </svg>
    );
  }

  // FastAPI
  if (norm.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#009688"/>
        <path d="M57.6 19.2L32 76.8h25.6l-6.4 32L96 51.2H70.4l6.4-32H57.6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12L18 38.5v51L64 116l46-26.5v-51L64 12z" fill="#339933"/>
        <path d="M64 22l37 21.3v42.5L64 107 27 85.8V43.3L64 22z" fill="#5FA04E"/>
        <path d="M64 50c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Express.js
  if (norm.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#222222" stroke="#444444" strokeWidth="4"/>
        <text x="64" y="74" fill="#FFFFFF" fontSize="34" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ex</text>
      </svg>
    );
  }

  // MySQL
  if (norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M117 76c-3-11-12-19-21-23-4-2-9-3-13-4-9-1-17 1-25 4-4 2-8 4-11 7-7 6-12 14-14 23-1 4-1 9 0 13 2 9 8 16 16 20 6 3 13 4 20 3 9-1 17-5 24-11 8-7 14-16 17-26 1-2 5-3 7-6z" fill="#00758F"/>
        <path d="M37 60c-2-8-6-15-12-20-4-3-8-5-13-6-4 0-7 2-9 5-2 3-2 7-1 11 3 11 11 20 20 26 5 3 11 5 17 5-1-7-2-14-2-21z" fill="#F29111"/>
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 94c-23.2 0-42-18.8-42-42S40.8 22 64 22s42 18.8 42 42-18.8 42-42 42z" fill="#336791"/>
        <circle cx="64" cy="64" r="30" fill="#336791"/>
        <path d="M50 54c3-6 9-10 16-10s13 4 16 10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="56" cy="60" r="3" fill="#FFFFFF"/>
        <circle cx="72" cy="60" r="3" fill="#FFFFFF"/>
        <path d="M64 64v12m-6 0h12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 10c0 0-4 12-4 28 0 25.4 14.8 43.8 14.8 62.4 0 18.2-10.8 27.6-10.8 27.6s10.8-9.4 10.8-27.6c0-18.6-14.8-37-14.8-62.4 0-16 4-28 4-28z" fill="#13AA52"/>
        <path d="M64 10c0 0-25 24.2-25 54.2 0 26.2 19 46.8 25 63.8 6-17 25-37.6 25-63.8 0-30-25-54.2-25-54.2z" fill="#13AA52" fillOpacity="0.8"/>
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M120 54c-1.5-1-4-1.5-7-1.5-1 0-2 0-3 .5 1-4 0-8-2-12l-4-3-3 3c-1.5 1.5-2.5 3.5-3 6-5-3-12-3-18-1v-8H67v10H54v-10H41v10H28v-10H15v10H2v18c0 14 6 27 16 35 12 10 28 15 46 15 36 0 60-18 64-46 0-4-.5-8-2-12 3-1 5-3 6-5l-2-2z" fill="#2496ED"/>
        <rect x="29" y="32" width="10" height="8" rx="1" fill="#FFFFFF"/>
        <rect x="42" y="32" width="10" height="8" rx="1" fill="#FFFFFF"/>
        <rect x="55" y="32" width="10" height="8" rx="1" fill="#FFFFFF"/>
        <rect x="29" y="22" width="10" height="8" rx="1" fill="#FFFFFF"/>
        <rect x="42" y="22" width="10" height="8" rx="1" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Git / GitHub
  if (norm.includes('git') && !norm.includes('hub')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M121.7 57.5L70.5 6.3c-3.1-3.1-8.1-3.1-11.2 0L48.1 17.5l14.2 14.2c3.3-1.1 7.1-.4 9.8 2.3 2.7 2.7 3.4 6.5 2.3 9.8l13.7 13.7c3.3-1.1 7.1-.4 9.8 2.3 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-2.8-2.8-3.5-6.8-2.1-10.2L66.7 50.4v29.4c.8.4 1.6.9 2.3 1.6 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8.9-.9 2-1.5 3.1-1.9V49.8c-1.1-.4-2.2-1-3.1-1.9-2.8-2.8-3.5-6.8-2.1-10.2L39 23.5 6.3 56.2c-3.1 3.1-3.1 8.1 0 11.2l51.2 51.2c3.1 3.1 8.1 3.1 11.2 0l53-53c3.1-3.1 3.1-8.1 0-11.1z" fill="#F05032"/>
      </svg>
    );
  }

  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 5.3C29.8 5.3 2 33 2 67.3c0 27.4 17.8 50.6 42.4 58.8 3.1.6 4.2-1.3 4.2-3 0-1.5-.1-6.5-.1-11.7-17.2 3.7-20.9-7.3-20.9-7.3-2.8-7.2-6.9-9.1-6.9-9.1-5.6-3.9.4-3.8.4-3.8 6.2.4 9.5 6.4 9.5 6.4 5.5 9.5 14.5 6.7 18 5.1.6-4 2.2-6.7 3.9-8.3-13.8-1.6-28.2-6.9-28.2-30.7 0-6.8 2.4-12.3 6.4-16.7-.6-1.6-2.8-7.9.6-16.5 0 0 5.2-1.7 17.1 6.4 5-1.4 10.3-2.1 15.6-2.1 5.3 0 10.6.7 15.6 2.1 11.9-8.1 17.1-6.4 17.1-6.4 3.4 8.6 1.2 14.9.6 16.5 4 4.4 6.4 9.9 6.4 16.7 0 23.9-14.5 29.1-28.3 30.6 2.2 1.9 4.2 5.7 4.2 11.6 0 8.4-.1 15.1-.1 17.2 0 1.7 1.1 3.7 4.3 3 24.6-8.2 42.4-31.4 42.4-58.8 0-34.3-27.8-62-62-62z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // VS Code
  if (norm.includes('code') || norm.includes('vs code')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M93.3 124.6c2.8 1.4 6.2.8 8.4-1.4l23.5-22.6c2.5-2.4 2.8-6.3.7-9L38.4 20.3c-2.3-2.3-6-2.3-8.3 0L3.6 44.8c-2.5 2.4-2.8 6.3-.7 9l87.5 70.8h2.9z" fill="#007ACC"/>
        <path d="M125.2 36.4L101.7 13.8c-2.2-2.2-5.6-2.8-8.4-1.4l-63.2 31 43.1 33.3 52-40.3z" fill="#1F8AD2"/>
        <path d="M30.1 43.4L3.6 67.9c-2.1 2.7-1.8 6.6.7 9l26.5 24.5 43.1-33.3-43.8-24.7z" fill="#0065A9"/>
      </svg>
    );
  }

  // Jupyter Notebook
  if (norm.includes('jupyter')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path d="M64 12c-23.2 0-42.5 15.6-48.4 36.8 5.7-4 12.6-6.4 20.1-6.4 19.3 0 35 15.7 35 35 0 2.2-.2 4.4-.6 6.5 17.5-3.3 30.9-18.7 30.9-37.1 0-19.2-15.7-34.8-37-34.8z" fill="#F37626"/>
        <circle cx="28" cy="98" r="8" fill="#656565"/>
        <circle cx="100" cy="30" r="8" fill="#656565"/>
        <circle cx="98" cy="98" r="12" fill="#E46E2E"/>
      </svg>
    );
  }

  // Postman
  if (norm.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="60" fill="#FF6C37"/>
        <path d="M88.5 46.2c-4.4-6.4-11.8-10.2-19.5-10.2-13.8 0-25 11.2-25 25 0 3.3.6 6.4 1.8 9.3l-12.8 12.8c-1.6 1.6-1.6 4.1 0 5.7 1.6 1.6 4.1 1.6 5.7 0l12.8-12.8c2.9 1.2 6 1.8 9.3 1.8 13.8 0 25-11.2 25-25 0-6.1-2.2-11.8-6.1-16.3l-11.2 9.7z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Speech / Voice AI
  if (norm.includes('voice') || norm.includes('speech')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" x2="12" y1="19" y2="22"/>
      </svg>
    );
  }

  // RAG / Retrieval
  if (norm.includes('rag')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        <path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    );
  }

  // Default fallback tech icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
};
