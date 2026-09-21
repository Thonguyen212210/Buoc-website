import React from 'react';

/**
 * Bước primary action button. Rounded, warm, lifted.
 * Variants: primary (purple), accent (gold), secondary (outline), ghost.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', gap: '6px' },
    md: { padding: '12px 24px', fontSize: 'var(--text-base)', gap: '8px' },
    lg: { padding: '16px 32px', fontSize: 'var(--text-md)', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    accent: {
      background: 'var(--gradient-gold)',
      color: 'var(--color-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const hoverFx = !disabled && hover ? {
    primary: { background: 'var(--color-primary-hover)', boxShadow: 'var(--shadow-md)' },
    accent: { filter: 'brightness(0.97)', boxShadow: 'var(--shadow-md)' },
    secondary: { background: 'var(--color-primary-soft)', borderColor: 'var(--color-primary)' },
    ghost: { background: 'var(--color-primary-soft)' },
  }[variant] : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: sizes[size].fontSize,
        lineHeight: 1,
        padding: sizes[size].padding,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: full ? '100%' : 'auto',
        transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        ...variants[variant],
        ...hoverFx,
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'inline-flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </button>
  );
}
