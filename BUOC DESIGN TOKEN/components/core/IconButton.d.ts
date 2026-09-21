import React from 'react';

export type IconButtonVariant = 'solid' | 'soft' | 'ghost' | 'onDark';

/**
 * Square, pill-rounded icon-only button (share, like, close, nav).
 * Always pass `label` for accessibility. Use `onDark` over purple headers.
 */
export interface IconButtonProps {
  /** @default "soft" */
  variant?: IconButtonVariant;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (aria-label) */
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon node */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
