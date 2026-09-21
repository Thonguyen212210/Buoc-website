import React from 'react';

export type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning' | 'error' | 'solid' | 'onDark';

/**
 * Small pill for status & category labels ("Đang gây quỹ", "Giáo dục",
 * "Phase 1"). Use `dot` for a leading status dot. `onDark` over purple.
 */
export interface BadgeProps {
  /** @default "neutral" */
  variant?: BadgeVariant;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
