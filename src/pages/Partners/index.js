import React from 'react';
import PageBackground from '../../components/PageBackground';
import Tabbar from '../../components/Tabbar';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.partners.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";
import {useStateValue} from "../../utils/state";

const cardButtonStyles = StyleSheet.create({
  firstCardPosition: {
    position: 'absolute',
    top: 75,
    left: 20,
  },
  size: {
    width: 340,
    height: 140,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const Partners = ({ navigation }) => {
  const [{ }, dispatch] = useStateValue();

  const onLongPress = () => {
    dispatch({
      type: 'RESET_STORE',
    });
  };

  return (
    <PageBackground source={screen}>
      <StyledButton
        style={[cardButtonStyles.firstCardPosition, cardButtonStyles.size]}
        onLongPress={onLongPress}
      />

      <Tabbar />
    </PageBackground>
  );
}

export default withNavigation(Partners);
