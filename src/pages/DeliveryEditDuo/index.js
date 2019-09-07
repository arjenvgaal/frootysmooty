import React from 'react';
import PageBackground from '../../components/PageBackground';
import Tabbar from '../../components/Tabbar';
import DeliveryTabs from '../../components/DeliveryTabs';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.delivery.edit.duo.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 120,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const DeliveryEditDuo = ({ navigation }) => (
  <PageBackground source={screen}>
    <StyledButton
      style={[primaryButtonStyles.position, primaryButtonStyles.size]}
      onPress={() => navigation.navigate('DeliverySubscribeFormPersonal')}
    />

    <DeliveryTabs />

    <Tabbar />
  </PageBackground>
);

export default withNavigation(DeliveryEditDuo);
