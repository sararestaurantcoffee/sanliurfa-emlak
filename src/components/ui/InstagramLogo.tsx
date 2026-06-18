interface InstagramLogoProps {
  size?: number;
  className?: string;
}

export function InstagramLogo({ size = 48, className = "" }: InstagramLogoProps) {
  const gradientId = `instagram-gradient-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="100%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="25%" stopColor="#FA7E1E" />
          <stop offset="50%" stopColor="#D62976" />
          <stop offset="75%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${gradientId})`} />
      <path
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 13.5c3.1 0 3.5 0 4.7.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.9 1 1.4.2.5.4 1.1.4 2.2.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.5.5-.9.8-1.4 1-.5.2-1.1.4-2.2.4-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.5-.8-.9-1-1.4-.2-.5-.4-1.1-.4-2.2-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.5-.5.9-.8 1.4-1 .5-.2 1.1-.4 2.2-.4 1.2-.1 1.6-.1 4.7-.1zm0-1.8c-3.2 0-3.6 0-4.8.1-1.3.1-2.1.3-2.9.6-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1-.3.8-.5 1.6-.6 2.9-.1 1.3-.1 1.7-.1 4.8s0 3.6.1 4.8c.1 1.3.3 2.1.6 2.9.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.6.5 2.9.6 1.3.1 1.7.1 4.8.1s3.6 0 4.8-.1c1.3-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.6.6-2.9.1-1.3.1-1.7.1-4.8s0-3.6-.1-4.8c-.1-1.3-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.6-.5-2.9-.6-1.2-.1-1.6-.1-4.8-.1zM24 18.2a5.8 5.8 0 100 11.6 5.8 5.8 0 000-11.6zm0 9.6a3.8 3.8 0 110-7.6 3.8 3.8 0 010 7.6zm6.2-10.4a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"
      />
    </svg>
  );
}
