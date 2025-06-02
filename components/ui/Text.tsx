import React from 'react';
import { Text as RNText, StyleSheet, TextStyle, TextProps as RNTextProps } from 'react-native';
import Colors from '@/constants/Colors';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption';
type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'white' | 'error' | 'success';
type TypographyWeight = 'regular' | 'medium' | 'semibold';

interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  style?: TextStyle;
  children: React.ReactNode;
}

export default function Text({
  variant = 'body',
  color = 'primary',
  weight = 'regular',
  style,
  children,
  ...props
}: TextProps) {
  return (
    <RNText
      style={[styles.base, styles[variant], styles[color], styles[weight], style]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Poppins-Regular',
  },
  // Typography variants
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    lineHeight: 34,
  },
  h3: {
    fontSize: 24,
    lineHeight: 30,
  },
  h4: {
    fontSize: 20,
    lineHeight: 26,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    lineHeight: 18,
  },
  // Color variants
  primary: {
    color: Colors.neutral[900],
  },
  secondary: {
    color: Colors.neutral[700],
  },
  muted: {
    color: Colors.neutral[500],
  },
  accent: {
    color: Colors.primary[500],
  },
  white: {
    color: Colors.white,
  },
  error: {
    color: Colors.error[500],
  },
  success: {
    color: Colors.success[500],
  },
  // Font weights
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
});