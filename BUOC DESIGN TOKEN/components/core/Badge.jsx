import React from 'react';

/** Small status / category pill. */
export function Badge({ variant = 'neutral', size = 'md', dot = false, children, style = {}, ...rest }) {
  const variants = {
    neutral: { background: 'var(--purple-100)', color: 'var(--purple-700)' },
    accent: { background: 'var(--cream-200)', color: 'var(--cream-700)' },
    success: { background: 'var(--success-soft)', color: 'var(--success)' },
    warning: { background: 'var(--warning-soft)', color: 'var(--warning)' },
    error: { background: 'var(--error-soft)', color: 'var(--error)' },
    solid: { background: 'var(--color-primary)', color: 'var(--color-on-primary)' },
    onDark: { background: 'rgba(255,240,168,0.16)', color: 'var(--cream-200)' },
  };
  const sizes = {
    sm: { fontSize: 'var(--text-2xs)', padding: '3px 8px' },
    md: { fontSize: 'var(--text-xs)', padding: '4px 11px' },
  };
  const dotColor = {
    neutral: 'var(--purple-500)', accent: 'var(--cream-600)', success: 'var(--success)',
    warning: 'var(--warning)', error: 'var(--error)', solid: 'var(--cream-300)', onDark: 'var(--cream-300)',
  }[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)', lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
      ...sizes[size], ...variants[variant], ...style,
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor }} />}
      {children}
    </span>
  );
}
