import React, {useRef} from 'react';
import {TouchableOpacity, Text,View, StyleSheet} from "react-native";
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import BackButton from '../../components/BackButton';
import screen from '../../assets/screen.inventory.add-ingredients.picture.png';
import { withNavigation } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import { twoApples, apple, applePeer } from '../../assets/examples/b64.js';
import { submitToGoogle, parseObjects } from '../../utils/visionAPIHelpers';

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 60,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    // backgroundColor: 'blue',
  }
});

const mockButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 10,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    // backgroundColor: 'red',
  }
});

const cameraStyles = StyleSheet.create({
  previewPosition: {
    top: 250,
    left: 35,
  },
  previewSize: {
    height: 175,
    width: 305
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const InventoryAddIngredientsPicture = ({ navigation }) => {
  const camera = useRef(null);

  const takePicture = async (mock) => {
    // const responseJSON = await submitToGoogle(twoApples);
    // const parsedIngredients = parseObjects(responseJSON);
    //
    // navigation.navigate('InventoryAddIngredientsSubmit', {
    //   parsedIngredients
    // });

    if (camera && mock !== true) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);

      const responseJSON = await submitToGoogle(data.base64);
      const parsedIngredients = parseObjects(responseJSON);
      console.log('PARSED', parsedIngredients);


      navigation.navigate('InventoryAddIngredientsSubmit', {
        parsedIngredients
      });

    } else {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);

      const parsedIngredients = [
        {name:"Pineapple"},
        {name:"Cucumber"},
        {name:"Red bell pepper"},
        {name:"Yellow bell pepper"},
        {name:"Banana"},
        {name:"Mango"},
        {name:"Aubergine"},
        {name:"Carrot"},
        {name:"Apple"},
        {name:"Pear"}
      ];

      console.log('PARSED', parsedIngredients);

      navigation.navigate('InventoryAddIngredientsSubmit', {
        parsedIngredients
      });
    }
  };

  return (
    <PageBackground source={screen}>
      <BackButton onPress={() => navigation.navigate('Inventory')} />

      <RNCamera
        ref={camera}
        style={[cameraStyles.previewPosition, cameraStyles.previewSize]}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // androidRecordAudioPermissionOptions={{
        //   title: 'Permission to use audio recording',
        //   message: 'We need your permission to use your audio',
        //   buttonPositive: 'Ok',
        //   buttonNegative: 'Cancel',
        // }}
      />

      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => takePicture()}
      />

      <StyledButton
        style={[mockButtonStyles.position, mockButtonStyles.size]}
        onPress={() => takePicture(true)}
      />
    </PageBackground>
  );
};

export default withNavigation(InventoryAddIngredientsPicture);
