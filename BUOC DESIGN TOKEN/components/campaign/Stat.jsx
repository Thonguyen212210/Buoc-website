import React from 'react';

/** A single big-number statistic (raised, donors, days left). */
export function Stat({ value, label, icon, align = 'start', tone = 'default', style = {}, ...rest }) {
  const colors = {
    default: 'var(--text-strong)',
    accent: 'var(--cream-700)',
    onDark: 'var(--cream-300)',
  };
  const labelColor = { default: 'var(--text-muted)', accent: 'var(--text-muted)', onDark: 'var(--text-on-dark-muted)' };
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '4px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      fontFamily: 'var(--font-body)', ...style,
    }} {...rest}>
      {icon && <span style={{ color: colors[tone], marginBottom: '2px', display: 'inline-flex' }}>{icon}</span>}
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-2xl)', lineHeight: 1, color: colors[tone],
      }}>{value}</span>
      <span style={{
        fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
        color: labelColor[tone], letterSpacing: 'var(--tracking-wide)',
      }}>{label}</span>
    </div>
  );
}
