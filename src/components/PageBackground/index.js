import React from 'react';
import { ImageBackground } from 'react-native';

const backgroundStyles = { width: '100%', height: '100%' };

const PageBackground = ({ source, children, ...props }) => (
  <ImageBackground source={source} style={backgroundStyles}>
    {children}
  </ImageBackground>
);

export default PageBackground;
