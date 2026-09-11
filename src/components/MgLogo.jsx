function MgLogo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mayank Gautam logo"
      role="img"
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="16"
        fill="url(#logoGradient)"
      />

      <path
        d="M17 43V21L26 33L32 24L38 33L47 21V43"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M38 43H47C50.314 43 53 40.314 53 37V33H45"
        stroke="#BFDBFE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <defs>
        <linearGradient
          id="logoGradient"
          x1="8"
          y1="8"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default MgLogo;