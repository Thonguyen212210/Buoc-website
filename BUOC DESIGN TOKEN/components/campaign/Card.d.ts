import React from 'react';

export type CardVariant = 'default' | 'soft' | 'dark' | 'accent';

/**
 * Soft, lifted surface container — the building block for campaign cards,
 * info panels, and forms. `dark` uses the night-sky gradient (light text).
 *
 * @startingPoint section="Campaign" subtitle="Surface container — default, soft, dark, accent" viewport="700x260"
 */
export interface CardProps {
  /** @default "default" */
  variant?: CardVariant;
  /** Inner padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover. @default false */
  hoverable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
