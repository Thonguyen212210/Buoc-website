import React from 'react';

/** Compact square icon-only button. */
export function IconButton({
  variant = 'soft',
  size = 'md',
  label,
  disabled = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 }[size];
  const variants = {
    solid: { background: 'var(--color-primary)', color: 'var(--color-on-primary)' },
    soft: { background: 'var(--color-primary-soft)', color: 'var(--color-primary)' },
    ghost: { background: 'transparent', color: 'var(--color-primary)' },
    onDark: { background: 'rgba(255,240,168,0.14)', color: 'var(--cream-200)' },
  };
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dims,
        height: dims,
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        filter: hover && !disabled ? 'brightness(0.96)' : 'none',
        transition: 'filter var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        transform: hover && !disabled ? 'translateY(-1px)' : 'none',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
