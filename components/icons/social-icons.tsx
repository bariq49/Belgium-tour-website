import React from "react";

export const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#1877F2" />
    <path
      d="M25.848 20H22.383V32.5H17.202V20H14.733V15.541H17.202V12.639C17.202 8.59102 18.825 6.5 23.473 6.5H27.106V10.959H24.834C22.977 10.959 22.384 11.666 22.384 13.149V15.541H27.135L25.848 20Z"
      fill="white"
    />
  </svg>
);

export const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="black" />
    {/* TikTok logo — musical note shape */}
    <path
      d="M26.5 13.2c-1.3-.8-2.2-2.1-2.5-3.7H21v13.9c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1v-3.1c-.3 0-.5-.1-.8-.1-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5V16.1c1 .7 2.2 1.1 3.5 1.1v-3c-.7 0-1.4-.3-2-.9v-.1z"
      fill="white"
    />
  </svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#0A66C2" />
    <path
      d="M12.8 16.6H9.2V30h3.6V16.6zM11 15.1c1.2 0 2.1-.9 2.1-2.1C13.1 11.9 12.2 11 11 11c-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2 2.1 2zM30.9 30h-3.6v-6.6c0-1.6-.6-2.7-2-2.7-1.1 0-1.8.8-2.1 1.5-.1.3-.1.7-.1 1.1V30h-3.6V16.6h3.6v1.5c.5-.8 1.4-1.9 3.4-1.9 2.5 0 4.4 1.6 4.4 5.1V30z"
      fill="white"
    />
  </svg>
);

export const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="insta_grad" cx="30%" cy="107%" r="150%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffd879" />
        <stop offset="5%" stopColor="#f9a534" />
        <stop offset="15%" stopColor="#ee4c6e" />
        <stop offset="35%" stopColor="#d32b8f" />
        <stop offset="65%" stopColor="#8b3fc4" />
        <stop offset="100%" stopColor="#4c5fdb" />
      </radialGradient>
    </defs>
    <circle cx="20" cy="20" r="20" fill="url(#insta_grad)" />
    {/* Camera body */}
    <rect x="10" y="10" width="20" height="20" rx="6" ry="6" stroke="white" strokeWidth="2" fill="none" />
    {/* Lens circle */}
    <circle cx="20" cy="20" r="5.5" stroke="white" strokeWidth="2" fill="none" />
    {/* Top-right dot */}
    <circle cx="26.5" cy="13.5" r="1.5" fill="white" />
  </svg>
);

export const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#FF0000" />
    {/* YouTube rounded rectangle */}
    <rect x="8" y="13" width="24" height="15" rx="4" fill="white" />
    {/* Play triangle */}
    <polygon points="17,16 17,24 25,20" fill="#FF0000" />
  </svg>
);