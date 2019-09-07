import React from 'react';
import PageBackground from '../../components/PageBackground';
import Tabbar from '../../components/Tabbar';
import DeliveryTabs from '../../components/DeliveryTabs';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.smoothies.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";

const cardButtonStyles = StyleSheet.create({
  firstCardPosition: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  size: {
    width: 160,
    height: 150,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const Smoothies = ({ navigation }) => (
  <PageBackground source={screen}>
    <StyledButton
      style={[cardButtonStyles.firstCardPosition, cardButtonStyles.size]}
      onPress={() => navigation.navigate('SmoothiesSmoothie')}
    />

    <Tabbar />
  </PageBackground>
);

export default withNavigation(Smoothies);
