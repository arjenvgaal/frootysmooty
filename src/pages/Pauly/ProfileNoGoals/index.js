import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import StyledButton from '../../../components/StyledButton/index';
import paulyprofileNoGoals from '../../../assets/paulyprofileNoGoals.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const moreStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 350,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 70,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ProfileNoGoals = ({ navigation }) => (
  <PageBackground source={paulyprofileNoGoals}>
    <StyledButton
      style={[moreStyles.position, moreStyles.size]}
      onPress={() => navigation.navigate('ExpensesEmpty')}
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileAddGoal')}
    />
  </PageBackground>
);

export default withNavigation(ProfileNoGoals);
