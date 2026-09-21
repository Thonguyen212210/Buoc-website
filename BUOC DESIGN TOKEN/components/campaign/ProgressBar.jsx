import React from 'react';

/** Donation-goal progress bar. Pass raised/goal, or a 0–100 `value`. */
export function ProgressBar({
  value, raised, goal, size = 'md', showLabel = false, tone = 'gold', style = {}, ...rest
}) {
  let pct = value;
  if (pct == null && goal) pct = (raised / goal) * 100;
  pct = Math.max(0, Math.min(100, pct || 0));
  const heights = { sm: 6, md: 10, lg: 14 }[size];
  const fills = {
    gold: 'var(--gradient-gold)',
    purple: 'linear-gradient(100deg, var(--purple-500), var(--purple-700))',
  };
  const fmt = (n) => new Intl.NumberFormat('vi-VN').format(Math.round(n));
  return (
    <div style={{ width: '100%', fontFamily: 'var(--font-body)', ...style }} {...rest}>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <span style={{ fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>
            {raised != null ? `${fmt(raised)}₫` : `${Math.round(pct)}%`}
          </span>
          {goal != null && (
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              / {fmt(goal)}₫
            </span>
          )}
        </div>
      )}
      <div style={{
        width: '100%', height: heights, background: 'var(--purple-100)',
        borderRadius: 'var(--radius-pill)', overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: fills[tone],
          borderRadius: 'var(--radius-pill)',
          transition: 'width var(--dur-slow) var(--ease-out)',
        }} />
      </div>
    </div>
  );
}
