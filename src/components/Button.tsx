import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  onPress?: TouchableOpacityProps['onPress'];
  title?: string;
} & TouchableOpacityProps;

const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  return (
    <TouchableOpacity ref={ref} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    width: '100%'
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export { Button }