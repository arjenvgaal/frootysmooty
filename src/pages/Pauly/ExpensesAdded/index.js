import React from 'react';
import PageBackground from '../../components/PageBackground';
import ActionButton from '../../components/ActionButton';
import StyledButton from '../../components/StyledButton';
import paulyexpensesAdded from'../../assets/paulyexpensesAdded.png';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 115,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ExpensesAdded = ({ navigation }) => (
  <PageBackground source={paulyexpensesAdded}>
    <StyledButton
      style={[styles.position, styles.size]}
      onPress={() => navigation.navigate('ExpensesResidentAdd')}
    />
    <ActionButton onPress={() => navigation.navigate('IncomesEmpty')} />
  </PageBackground>
);

export default withNavigation(ExpensesAdded);
