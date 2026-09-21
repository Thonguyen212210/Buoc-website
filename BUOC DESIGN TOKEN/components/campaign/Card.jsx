import React from 'react';

/** Soft, lifted surface container. The default Bước card. */
export function Card({ variant = 'default', padding = 'md', hoverable = false, onClick, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };
  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)' },
    soft: { background: 'var(--purple-50)', border: '1px solid var(--purple-100)', color: 'var(--text-body)' },
    dark: { background: 'var(--gradient-night)', border: '1px solid var(--border-on-dark)', color: 'var(--text-on-dark)' },
    accent: { background: 'var(--cream-100)', border: '1px solid var(--cream-300)', color: 'var(--text-body)' },
  };
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-md)',
        padding: pads[padding],
        boxShadow: hover && hoverable ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover && hoverable ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: onClick ? 'pointer' : 'default',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
