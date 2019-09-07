import React from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.start.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";
import {useStateValue} from "../../utils/state";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 20,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
  }
});

const Start = ({ navigation }) => {
  const [{ subscription, subscriptionActive }, dispatch] = useStateValue();

  const onPress = () => {
    if (subscription) {
      if (subscriptionActive) {
        navigation.navigate(`DeliveryEdit${subscription}`)
      } else {
        navigation.navigate(`DeliverySubscribe${subscription}`)
      }
    } else {
      // Default route
      navigation.navigate(`DeliverySubscribe${subscription}`)
    }
  };

  return (
    <PageBackground source={screen}>
      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => onPress()}
      />
    </PageBackground>
  );
}

export default withNavigation(Start);
