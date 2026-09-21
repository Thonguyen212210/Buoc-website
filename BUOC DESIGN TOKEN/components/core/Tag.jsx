import React from 'react';

/** Selectable / removable tag chip (filters, interests). */
export function Tag({ active = false, removable = false, onRemove, onClick, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--text-sm)', lineHeight: 1.4,
        padding: '6px 14px', borderRadius: 'var(--radius-pill)',
        cursor: onClick ? 'pointer' : 'default',
        border: '1.5px solid',
        borderColor: active ? 'var(--color-primary)' : 'var(--border-strong)',
        background: active ? 'var(--color-primary)' : (hover && onClick ? 'var(--color-primary-soft)' : 'transparent'),
        color: active ? 'var(--color-on-primary)' : 'var(--color-primary)',
        transition: 'all var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {removable && (
        <span
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
          style={{ display: 'inline-flex', cursor: 'pointer', opacity: 0.7, fontSize: '1.1em', lineHeight: 1 }}
        >×</span>
      )}
    </span>
  );
}
