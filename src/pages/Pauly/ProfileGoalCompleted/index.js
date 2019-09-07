import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import StyledButton from '../../../components/StyledButton/index';
import paulyprofileGoalCompleted from '../../../assets/paulyprofileGoalCompleted.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const addStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 160,
    right: 165,
  },
  size: {
    width: 45,
    height: 45,
  }
});

const ProfileGoalCompleted = ({ navigation }) => (
  <PageBackground source={paulyprofileGoalCompleted}>
    <StyledButton
      style={[addStyles.position, addStyles.size]}
      onPress={() => navigation.navigate('ProfileOneGoalComplete')}
    />
  </PageBackground>
);

export default withNavigation(ProfileGoalCompleted);
