import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import StyledButton from '../../../components/StyledButton/index';
import paulyprofileOneGoalComplete from '../../../assets/paulyprofileOneGoalComplete.png';
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

const goalStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 145,
    left: 25
  },
  size: {
    width: '90%',
    height: 65,
  }
});

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 100,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ProfileOneGoalComplete = ({ navigation }) => (
  <PageBackground source={paulyprofileOneGoalComplete}>
    <StyledButton
      style={[moreStyles.position, moreStyles.size]}
      onPress={() => navigation.navigate('ExpensesEmpty')}
    />
    <StyledButton
      style={[goalStyles.position, goalStyles.size]}
      onPress={() => navigation.navigate('ProfileGoalAddGoalStepAddedAndChecked')}
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileAddGoal')}
    />
  </PageBackground>
);

export default withNavigation(ProfileOneGoalComplete);
