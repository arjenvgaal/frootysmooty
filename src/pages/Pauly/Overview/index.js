import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import paulyoverview from'../../assets/paulyoverview.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 95,
    left: 25,
  },
  size: {
    width: 160,
    height: 145,
  }
});

const Overview = ({ navigation }) => (
  <PageBackground source={paulyoverview}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('ProfileSupervisorPerspective')}
    />
  </PageBackground>
);

export default withNavigation(Overview);
