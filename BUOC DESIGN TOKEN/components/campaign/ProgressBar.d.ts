import React from 'react';

/**
 * Donation-goal progress bar — the signature crowdfunding element.
 * Pass `raised` + `goal` (VNĐ) and it computes the percent and can render
 * a "raised / goal" label, or pass an explicit `value` (0–100).
 *
 * @startingPoint section="Campaign" subtitle="Goal progress with raised/goal label" viewport="700x140"
 */
export interface ProgressBarProps {
  /** Explicit percent 0–100 (overrides raised/goal) */
  value?: number;
  /** Amount raised so far, VNĐ */
  raised?: number;
  /** Fundraising goal, VNĐ */
  goal?: number;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Show the raised/goal label above the bar. @default false */
  showLabel?: boolean;
  /** Fill color. @default "gold" */
  tone?: 'gold' | 'purple';
  style?: React.CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
