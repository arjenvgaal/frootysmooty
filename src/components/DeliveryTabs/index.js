import React from 'react';
import {  StyleSheet } from 'react-native';
import StyledButton from '../StyledButton';
import {withNavigation} from "react-navigation";
import {useStateValue} from "../../utils/state";

const tabButtonStyles = StyleSheet.create({
  leftTabPosition: {
    position: 'absolute',
    top: 150,
    left: 80
  },
  middleTabPosition: {
    position: 'absolute',
    top: 150,
    left: 150,
  },
  rightTabPosition: {
    position: 'absolute',
    top: 150,
    left: 220,
  },
  size: {
    width: 70,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const DeliveryTabs = ({ navigation }) => {
  const [{}, dispatch] = useStateValue();

  const onPress = (subscription) => {
    navigation.navigate(`DeliverySubscribe${subscription}`);

    dispatch({
      type: 'UPDATE_SUBSCRIPTION',
      subscription,
    });
  };

  return (
    <>
      <StyledButton
        style={[tabButtonStyles.leftTabPosition, tabButtonStyles.size]}
        onPress={() => onPress("Solo")}
      />

      <StyledButton
        style={[tabButtonStyles.middleTabPosition, tabButtonStyles.size]}
        onPress={() => onPress("Duo")}
      />

      <StyledButton
        style={[tabButtonStyles.rightTabPosition, tabButtonStyles.size]}
        onPress={() => onPress("Family")}
      />
    </>

  )
};

export default withNavigation(DeliveryTabs);