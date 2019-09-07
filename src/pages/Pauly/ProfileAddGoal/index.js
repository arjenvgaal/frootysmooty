import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import StyledButton from '../../../components/StyledButton/index';
import ActionButton from '../../../components/ActionButton';
import InputField from '../../../components/InputField/index';
import paulyprofileAddGoal from '../../../assets/paulyprofileAddGoal.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 285,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const backStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const inputStyles = StyleSheet.create({
  goalNamePosition: {
    position: 'absolute',
    top: 85,
    marginHorizontal: 50
  },
});


const ProfileAddGoal = ({ navigation }) => (
  <PageBackground source={paulyprofileAddGoal}>
    <StyledButton
      style={[backStyles.position, backStyles.size]}
      onPress={() => navigation.navigate('ProfileNoGoals')}
    />
    <InputField
      styleOptions={inputStyles.goalNamePosition}
      placeholder="Name of your goal"
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileAddGoalAddStep')}
    />
    <ActionButton onPress={() => navigation.navigate('ProfileSupervisorPerspective')} />
  </PageBackground>
);

export default withNavigation(ProfileAddGoal);
