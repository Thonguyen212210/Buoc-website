/* Lucide-style icon set (2px round stroke) for the Bước UI kit.
   Matches Lucide's geometry & stroke conventions. Exported to window. */
const BcIcon = ({ name, size = 20, stroke = 2, color = 'currentColor', style = {}, ...rest }) => {
  const P = {
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z" />,
    arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    arrowLeft: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    calendar: <><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
    sparkles: <path d="M9.94 14.66 12 22l2.06-7.34L22 12l-7.94-2.66L12 2l-2.06 7.34L2 12z" />,
    star: <path d="M11.5 2.5 14 8l6 .8-4.4 4.1 1.2 6L11.5 16 6.2 18.9l1.2-6L3 8.8 9 8z" />,
    check: <path d="M20 6 9 17l-5-5" />,
    checkCircle: <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    gift: <><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" /></>,
    bookOpen: <><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></>,
    lightbulb: <><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7.5a6 6 0 0 0-12 0c0 1.5.3 2.7 1.5 4 .8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6M10 22h4" /></>,
    tent: <><path d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15l-3.5 6" /><path d="M2 21h20" /></>,
    mountain: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
    handHeart: <><path d="M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H9.5a3 3 0 0 0-2.1.9L4 14" /><path d="m2 16 4 4 8-1 6-5a2 2 0 0 0-2.75-2.91L13 14" /><path d="M18 5.5a2 2 0 0 0-3.4-1.4l-.6.6-.6-.6A2 2 0 0 0 10 5.5c0 2 3.5 4 3.5 4s3.5-2 3.5-4Z" /></>,
    quote: <path d="M10 11H6a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7c0 2-1 3-3 4M21 11h-4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7c0 2-1 3-3 4" />,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    instagram: <><rect width="20" height="20" x="2" y="2" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
    play: <path d="m6 3 14 9-14 9V3z" />,
  };
  const filled = name === 'play';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill={filled ? color : 'none'} stroke={color} strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }} {...rest}>
      {P[name] || null}
    </svg>
  );
};
window.BcIcon = BcIcon;
