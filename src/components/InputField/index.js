import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    width: '80%',
    borderColor: '#E1E1E1',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  inputStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#121212',
    fontFamily: 'Stilu-SemiBold'
  },
});

const InputField = ({ value, placeholder, onChange, style, ...props}) => {
  return (
    <View style={[styles.containerStyle, style]}>
      <TextInput
        value={value}
        style={[styles.inputStyle, ]}
        placeholder={placeholder || '...'}
        onChangeText={onChange}
        {...props}
      />
    </View>
  )
};

export default InputField;