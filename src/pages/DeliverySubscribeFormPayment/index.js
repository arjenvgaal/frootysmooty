import React, { useState } from 'react';
import PageBackground from '../../components/PageBackground';
import BackButton from '../../components/BackButton';
import InputField from '../../components/InputField';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.delivery.subscribe-form.payment.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";
import {useStateValue} from "../../utils/state";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 55,
    left: 165,
  },
  size: {
    width: 50,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const secondaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 5,
    left: 70,
  },
  size: {
    width: 240,
    height: 40,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});


const inputStyles = StyleSheet.create({
  cardNameFieldPosition: {
    position: 'absolute',
    top: 175,
    left: 40,
  },
  cardHolderNameFieldPosition: {
    position: 'absolute',
    top: 255,
    left: 40,
  },
  cardExpirationDateFieldPosition: {
    position: 'absolute',
    top: 340,
    left: 40,
  },
});





const DeliverySubscribeFormPayment = ({ navigation }) => {
  const [{ subscribeFormData, subscription, subscriptionActive }, dispatch] = useStateValue();

  // const [cardNumber, setCardNumber] = useState(subscribeFormData.cardNumber);
  // const [cardHolderName, setCardHolderName] = useState(subscribeFormData.cardHolderName);
  // const [cardExpirationDate, setCardExpirationDate] = useState(subscribeFormData.cardExpirationDate);

  const [cardNumber, setCardNumber] = useState("4111 1111 1111 1111");
  const [cardHolderName, setCardHolderName] = useState("Hannah Fisher");
  const [cardExpirationDate, setCardExpirationDate] = useState("02/24");

  const cancelPayment = () => {
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

  const updateSubscribeFormData = () => {
    const updatedSubscribeFormData = {
      ...subscribeFormData,
      cardNumber,
      cardHolderName,
      cardExpirationDate,
    };

    dispatch({
      type: 'UPDATE_SUBSCRIBE_FORM_DATA',
      subscribeFormData: updatedSubscribeFormData,
    });
  };

  const acceptPayment = () => {
    updateSubscribeFormData();
    navigation.navigate(`DeliveryEdit${subscription}`);

    dispatch({
      type: 'UPDATE_SUBSCRIPTION_ACTIVE',
      subscriptionActive: true,
    });
  };

  return (
    <PageBackground source={screen}>
      <BackButton onPress={() => navigation.navigate('DeliverySubscribeFormPersonal')} />

      <InputField
        style={[inputStyles.cardNameFieldPosition]}
        onChange={(text) => setCardNumber(text)}
        value={cardNumber}
        placeholder={"..."}
      />

      <InputField
        style={[inputStyles.cardHolderNameFieldPosition]}
        onChange={(text) => setCardHolderName(text)}
        value={cardHolderName}
        placeholder={"dd/mm/yy"}
      />


      <InputField
        style={[inputStyles.cardExpirationDateFieldPosition]}
        onChange={(text) => setCardExpirationDate(text)}
        value={cardExpirationDate}
        placeholder={"dd/mm/yy"}
      />


      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => acceptPayment()}
      />

      <StyledButton
        style={[secondaryButtonStyles.position, secondaryButtonStyles.size]}
        onPress={cancelPayment}
      />
    </PageBackground>
  );
};

export default withNavigation(DeliverySubscribeFormPayment);
