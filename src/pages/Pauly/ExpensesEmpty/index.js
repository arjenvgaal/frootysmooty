import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyexpensesEmpty from'../../assets/paulyexpensesEmpty.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 240,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ExpensesEmpty = ({ navigation }) => (
  <PageBackground source={paulyexpensesEmpty}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('ExpensesAdd')}
    />
    <ActionButton onPress={() => navigation.navigate('IncomesResident')} />
  </PageBackground>
);

export default withNavigation(ExpensesEmpty);
