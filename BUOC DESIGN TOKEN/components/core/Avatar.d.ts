import React from 'react';

/**
 * Circular avatar. Shows `src` image, else initials from `name`.
 * `ring` adds a gold accent ring (use for featured donors/mentors).
 */
export interface AvatarProps {
  src?: string;
  /** Full name — used for initials fallback & alt text */
  name?: string;
  /** Preset size or a raw px number. @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Gold accent ring. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
