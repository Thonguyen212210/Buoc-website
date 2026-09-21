import React from 'react';

/**
 * Labeled text field with focus ring, helper text, error state, and
 * optional prefix/suffix adornments (e.g. "₫" prefix for amounts).
 */
export interface InputProps {
  label?: string;
  /** Helper text below the field */
  hint?: string;
  /** Error message — turns the field red and overrides hint */
  error?: string;
  /** Leading adornment (e.g. currency symbol) */
  prefix?: React.ReactNode;
  /** Trailing adornment (e.g. "VNĐ") */
  suffix?: React.ReactNode;
  id?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
