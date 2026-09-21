import React from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button for Bước — pill-shaped, warm, gently lifted.
 * Use `accent` (gold gradient) for the single most important action on a
 * page (e.g. "Quyên góp ngay"); `primary` for standard actions.
 *
 * @startingPoint section="Core" subtitle="Pill buttons — primary, gold, outline, ghost" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Stretch to fill the container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Icon node rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label */
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
