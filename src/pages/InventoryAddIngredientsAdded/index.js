import React, { useState } from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import screen from'../../assets/screen.inventory.add-ingredients.added.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet, Image, View} from "react-native";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 80,
    left: 160,
  },
  size: {
    width: 50,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const styles = StyleSheet.create({
  bigGifStyle: {
    width: 275 * 1.3,    
    height: 154 * 1.3,    
  },
  gifContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: 'absolute',
    width: "100%",
    top: 120,
  }
});

const InventoryAddIngredientsAdded = ({ navigation }) => {

  return (
    <PageBackground source={screen}>
      <View style={styles.gifContainer}>
        <Image source={require('../../assets/images/apple.gif')} resizeMode="cover" style={styles.bigGifStyle} />
      </View>

      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => navigation.replace('Inventory')}
      />
    </PageBackground>
  );
};

export default withNavigation(InventoryAddIngredientsAdded);
