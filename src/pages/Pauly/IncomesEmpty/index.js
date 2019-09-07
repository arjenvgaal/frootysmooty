import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyincomesEmpty from'../../assets/paulyincomesEmpty.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 235,
    right: 160,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const IncomesEmpty = ({ navigation }) => (
  <PageBackground source={paulyincomesEmpty}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('IncomesAdd')}
    />
    <ActionButton onPress={() => navigation.navigate('ProfileSupervisorPerspective')} />
  </PageBackground>
);

export default withNavigation(IncomesEmpty);
