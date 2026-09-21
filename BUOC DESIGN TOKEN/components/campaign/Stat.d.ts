import React from 'react';

/**
 * A single headline statistic — big display number + caption.
 * Use in rows for campaign metrics (số tiền, nhà hảo tâm, ngày còn lại).
 */
export interface StatProps {
  /** The big number/value, pre-formatted (e.g. "5.000.000₫", "248") */
  value: React.ReactNode;
  /** Caption below the number */
  label: string;
  /** Optional leading icon node */
  icon?: React.ReactNode;
  /** @default "start" */
  align?: 'start' | 'center';
  /** @default "default" */
  tone?: 'default' | 'accent' | 'onDark';
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
