import React from 'react';

/** Text input with label, helper/error, and optional adornments. */
export function Input({
  label, hint, error, prefix, suffix, id,
  type = 'text', value, onChange, placeholder, disabled = false,
  style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--error)' : focus ? 'var(--color-primary)' : 'var(--border-strong)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', fontFamily: 'var(--font-body)' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: disabled ? 'var(--surface-sunk)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        padding: '0 14px',
        boxShadow: focus ? (error ? '0 0 0 4px var(--error-soft)' : 'var(--shadow-glow-purple)') : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {prefix && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-base)', whiteSpace: 'nowrap' }}>{prefix}</span>}
        <input
          id={inputId} type={type} value={value} onChange={onChange}
          placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: 'var(--text-base)', color: 'var(--text-strong)',
            padding: '12px 0', ...style,
          }}
          {...rest}
        />
        {suffix && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-base)', whiteSpace: 'nowrap' }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--error)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
