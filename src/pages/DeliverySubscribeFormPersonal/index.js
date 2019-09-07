import React, {useState} from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.delivery.subscribe-form.personal.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet} from "react-native";
import {useStateValue} from "../../utils/state";
import BackButton from "../../components/BackButton";
import InputField from "../../components/InputField";

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
  nameFieldPosition: {
    position: 'absolute',
    top: 175,
    left: 40,
  },
  birthDateFieldPosition: {
    position: 'absolute',
    top: 255,
    left: 40,
  },
  emailFieldPosition: {
    position: 'absolute',
    top: 340,
    left: 40,
  },
  streetFieldPosition: {
    position: 'absolute',
    top: 420,
    left: 40,
  },
  postalCodeFieldPosition: {
    position: 'absolute',
    top: 465,
    left: 40,
  },
  cityFieldPosition: {
    position: 'absolute',
    top: 510,
    left: 40,
  }
});


const DeliverySubscribeFormPersonal = ({ navigation }) => {
  const [{ subscribeFormData, subscription, subscriptionActive }, dispatch] = useStateValue();

  const [name, setName] = useState(subscribeFormData.name);
  const [birthDate, setBirthDate] = useState(subscribeFormData.birthDate);
  const [email, setEmail] = useState(subscribeFormData.email);
  const [street, setStreet] = useState(subscribeFormData.street);
  const [postalCode, setPostalCode] = useState(subscribeFormData.postalCode);
  const [city, setCity] = useState(subscribeFormData.city);

  const onBackPress = () => {
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
      name,
      birthDate,
      email,
      street,
      postalCode,
      city,
    };

    dispatch({
      type: 'UPDATE_SUBSCRIBE_FORM_DATA',
      subscribeFormData: updatedSubscribeFormData,
    });
  };

  const onPressNextPage = () => {
    updateSubscribeFormData();
    navigation.navigate('DeliverySubscribeFormPayment')
  };

  return (
    <PageBackground source={screen}>
      <BackButton onPress={onBackPress} />

      <>
        <InputField
          style={[inputStyles.nameFieldPosition]}
          onChange={(text) => setName(text)}
          value={name}
          placeholder={"..."}
        />

        <InputField
          style={[inputStyles.birthDateFieldPosition]}
          onChange={(text) => setBirthDate(text)}
          value={birthDate}
          placeholder={"dd/mm/yy"}
        />

        <InputField style={[inputStyles.emailFieldPosition]} onChange={(text) => setEmail(text)} value={email} placeholder={"..."}  />

        <InputField style={[inputStyles.streetFieldPosition]} onChange={(text) => setStreet(text)} value={street} placeholder={"Street and number"} />

        <InputField style={[inputStyles.postalCodeFieldPosition]} onChange={(text) => setPostalCode(text)} value={postalCode} placeholder={"Postal code"} />

        <InputField style={[inputStyles.cityFieldPosition]} onChange={(text) => setCity(text)} value={city} placeholder={"City"} />
      </>

      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => onPressNextPage()}
      />
      <StyledButton
        style={[secondaryButtonStyles.position, secondaryButtonStyles.size]}
        onPress={onBackPress}
      />
    </PageBackground>
  );
};

export default withNavigation(DeliverySubscribeFormPersonal);
