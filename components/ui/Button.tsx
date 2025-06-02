import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import Colors from '@/constants/Colors';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[`${size}Button`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? Colors.white : Colors.primary[500]} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  // Variants
  primary: {
    backgroundColor: Colors.primary[500],
  },
  primaryText: {
    color: Colors.white,
  },
  secondary: {
    backgroundColor: Colors.secondary[100],
  },
  secondaryText: {
    color: Colors.secondary[800],
  },
  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  outlineText: {
    color: Colors.primary[500],
  },
  ghost: {
    backgroundColor: Colors.transparent,
  },
  ghostText: {
    color: Colors.primary[500],
  },
  // Sizes
  smButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  smText: {
    fontSize: 14,
  },
  mdButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  mdText: {
    fontSize: 16,
  },
  lgButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  lgText: {
    fontSize: 18,
  },
  // States
  disabled: {
    backgroundColor: Colors.neutral[200],
    borderColor: Colors.neutral[200],
  },
  disabledText: {
    color: Colors.neutral[500],
  },
});