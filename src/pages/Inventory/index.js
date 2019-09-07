import React from 'react';
import PageBackground from '../../components/PageBackground';
import Tabbar from '../../components/Tabbar';
import StyledButton from '../../components/StyledButton';
import IngredientRow from '../../components/IngredientRow';
import screen from'../../assets/screen.inventory.png';
import { withNavigation } from 'react-navigation';
import {View, FlatList, StyleSheet} from "react-native";
import {useStateValue} from "../../utils/state";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 175,
    left: 50,
  },
  size: {
    width: 275,
    height: 50,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});

const whitePanelStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 115,
    left: 35,
  },
  size: {
    width: 300,
    height: 300,

  },
  style: {
    backgroundColor: '#fff',
    //borderWidth: 1,
  }
});

const Inventory = ({ navigation }) => {
  const [{ ingredientInventory }, dispatch] = useStateValue();

  const renderItem = ({key, title, count}) => (
    <IngredientRow
      title={title}
      count={count}
      onLeadingPress={() =>  updateIngredientInventory(key, count - 1)}
      onTrailingPress={() => updateIngredientInventory(key, count + 1)}
    />
  );

  const updateIngredientInventory = (itemKey, newCount) => {
    let updatedIngredientInventory = ingredientInventory;

    if (newCount === 0) {
      // Remove item from inventory
      updatedIngredientInventory = ingredientInventory.filter(ingredient => ingredient.key !== itemKey);
    } else {
      updatedIngredientInventory = ingredientInventory.map(ingredient => {
        if (ingredient.key === itemKey) {
          ingredient.count = newCount;
        }
        return ingredient;
      });
    }

    dispatch({
      type: 'UPDATE_INGREDIENT_INVENTORY',
      ingredientInventory: updatedIngredientInventory
    });
  };

  return (
    <PageBackground source={screen}>
      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => navigation.navigate('InventoryAddIngredientsPicture')}
      />


      <View style={[whitePanelStyles.position, whitePanelStyles.size, whitePanelStyles.style]}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={ingredientInventory}
          renderItem={({item}) => renderItem(item)}
        />
      </View>


      <Tabbar />
    </PageBackground>
  )
};

export default withNavigation(Inventory);
