import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import ActionButton from '../../../components/ActionButton';
import InputField from '../../../components/InputField/index';
import StyledButton from '../../../components/StyledButton/index';
import paulyprofileAddGoalAddStep from '../../../assets/paulyprofileAddGoalAddStep.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const inputStyles = StyleSheet.create({
  namePosition: {
    position: 'absolute',
    bottom: 170,
    marginHorizontal: 50
  },
  datePosition: {
    position: 'absolute',
    bottom: 130,
    marginHorizontal: 50
  },
});

const backStyles = StyleSheet.create({
  size: {
    width: '100%',
    height: '65%',
  }
});

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 30,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ProfileAddGoalAddStep = ({ navigation }) => (
  <PageBackground source={paulyprofileAddGoalAddStep}>
    <StyledButton
      style={[backStyles.size]}
      onPress={() => navigation.navigate('ProfileAddGoal')}
    />
    <InputField
      styleOptions={inputStyles.namePosition}
      placeholder="Name of step"
    />
    <InputField
      styleOptions={inputStyles.datePosition}
      placeholder="dd / mm / yyyy"
    />
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileGoalAddGoalStepAdded')}
    />
  </PageBackground>
);

export default withNavigation(ProfileAddGoalAddStep);
