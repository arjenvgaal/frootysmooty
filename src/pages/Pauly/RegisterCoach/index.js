import React from 'react';
import PageBackground from '../../../components/PageBackground/index';
import ActionButton from '../../../components/ActionButton';
import CheckBox from '../../../components/CheckBox/index';
import StyledButton from '../../../components/StyledButton/index';
import paulyregisterCoach from '../../../assets/paulyregisterCoach.png';
import InputField from '../../../components/InputField/index';
import { withNavigation } from "react-navigation";
import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  firstNamePosition: {
    position: 'absolute',
    bottom: 320,
    marginHorizontal: 50
  },
  lastNamePosition: {
    position: 'absolute',
    bottom: 260,
    marginHorizontal: 50
  },
  numberPosition: {
    position: 'absolute',
    bottom: 205,
    marginHorizontal: 50
  },
  checkboxPosition: {
    position: 'absolute',
    bottom: 165,
    left: 50,
  }
});

const selectStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 260,
    left: 50,
  },
  size: {
    width: '74%',
    height: 30,
  }
});


const RegisterCoach = ({ navigation }) => (
  <PageBackground source={paulyregisterCoach}>
    <StyledButton
      style={[selectStyles.position, selectStyles.size]}
      onPress={() => navigation.navigate('RegisterResident')}
    />
    <InputField
      styleOptions={inputStyles.firstNamePosition}
      placeholder="First name"
    />
    <InputField
      styleOptions={inputStyles.lastNamePosition}
      placeholder="Last name"
    />
    <InputField
      styleOptions={inputStyles.numberPosition}
      placeholder="+ 44"
    />
    <CheckBox styleOptions={inputStyles.checkboxPosition} />
    <ActionButton onPress={() => navigation.navigate('Overview')} />
  </PageBackground>
);

export default withNavigation(RegisterCoach);
