import React from 'react';

/**
 * Outline chip for filters & interest tags. `active` fills it purple.
 * Set `removable` for a trailing × (chips the user can dismiss).
 */
export interface TagProps {
  /** Selected state. @default false */
  active?: boolean;
  /** Show a removable × button. @default false */
  removable?: boolean;
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
