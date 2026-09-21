import React from 'react';

/** Circular avatar with image or initials fallback. */
export function Avatar({ src, name = '', size = 'md', ring = false, style = {}, ...rest }) {
  const dims = { xs: 24, sm: 32, md: 44, lg: 60, xl: 88 }[size] || size;
  const fontSize = typeof dims === 'number' ? dims * 0.4 : 18;
  const initials = name.trim().split(/\s+/).slice(-2).map(w => w[0]).join('').toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dims, height: dims, borderRadius: '50%', overflow: 'hidden',
        flexShrink: 0, background: 'var(--purple-200)', color: 'var(--purple-700)',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
        fontSize, letterSpacing: '0.01em',
        boxShadow: ring ? '0 0 0 3px var(--paper-100), 0 0 0 5px var(--cream-300)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </span>
  );
}
