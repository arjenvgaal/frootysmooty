import React from 'react';
import {  StyleSheet } from 'react-native';
import StyledButton from '../StyledButton';
import {withNavigation} from "react-navigation";
import { useStateValue } from '../../utils/state';

const tabbarButtonStyle = StyleSheet.create({
  deliveryPosition: {
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  inventoryPosition: {
    position: 'absolute',
    bottom: 0,
    left: 105,
  },
  smoothiesPosition: {
    position: 'absolute',
    bottom: 0,
    left: 195,
  },
  partnersPosition: {
    position: 'absolute',
    bottom: 0,
    left: 285,
  },
  size: {
    width: 75,
    height: 75,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const Tabbar = ({ navigation }) => {
  const [{ subscription, subscriptionActive }, dispatch] = useStateValue();

  const onPressDelivery = () => {
    if (subscription) {
      if (subscriptionActive) {
        navigation.navigate(`DeliveryEdit${subscription}`)
      } else {
        navigation.navigate(`DeliverySubscribe${subscription}`)
      }
    } else {
      // Default route
      navigation.navigate('DeliverySubscribeSolo');
    }
  };


  return (
    <>
      <StyledButton
        style={[tabbarButtonStyle.deliveryPosition, tabbarButtonStyle.size]}
        onPress={() => onPressDelivery()}
      />

      <StyledButton
        style={[tabbarButtonStyle.inventoryPosition, tabbarButtonStyle.size]}
        onPress={() => navigation.navigate('Inventory')}
      />

      <StyledButton
        style={[tabbarButtonStyle.smoothiesPosition, tabbarButtonStyle.size]}
        onPress={() => navigation.navigate('Smoothies')}
      />

      <StyledButton
        style={[tabbarButtonStyle.partnersPosition, tabbarButtonStyle.size]}
        onPress={() => navigation.navigate('Partners')}
      />
    </>
  );
};

export default withNavigation(Tabbar);