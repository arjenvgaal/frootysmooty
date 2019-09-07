import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const StyledButton = ({ style, onPress, onLongPress, ...props }) => (
  <TouchableOpacity style={style} onPress={onPress} onLongPress={onLongPress} />
);

export default StyledButton;
