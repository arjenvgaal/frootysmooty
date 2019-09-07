import React, { useState, useEffect } from 'react';
import PageBackground from '../../components/PageBackground';
import StyledButton from '../../components/StyledButton';
import BackButton from '../../components/BackButton';
import IngredientRow from '../../components/IngredientRow';
import screen from '../../assets/screen.inventory.add-ingredients.submit.png';
import { withNavigation } from 'react-navigation';
import {StyleSheet, FlatList, View} from "react-native";
import {useStateValue} from "../../utils/state";

const primaryButtonStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 10,
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


const formatIngredientParams = (ingredientParams) => {
  const ingredients = [];
  ingredientParams.forEach(ingredient => {
    let foundIngredient = false;

    ingredients.forEach((ing, i) => {
      if (ing.name === ingredient.name || ing.title === ingredient.title) {
        ingredients[i].count = ingredients[i].count + 1;
        foundIngredient = true;
      }
    });

    if (!foundIngredient) {
      ingredient.key = ingredient.name;
      ingredient.title = ingredient.name;
      ingredient.count = 1;
      ingredients.push(ingredient)
    }
  });

  return ingredients;
};

const InventoryAddIngredientsSubmit = ({ navigation }) => {
  const [{ ingredientInventory }, dispatch] = useStateValue();

  const [parsedIngredients, setParsedIngredients] = useState();

  useEffect(() => {
    const parsedIngredientParams = navigation.getParam('parsedIngredients', []);
    const formattedIngredients = formatIngredientParams(parsedIngredientParams);
    setParsedIngredients(formattedIngredients);
  }, []);

  const renderItem = ({key, title, count}) => (
    <IngredientRow
      title={title}
      count={count}
      onLeadingPress={() =>  updateIngredientInventory(key, count - 1)}
      onTrailingPress={() => updateIngredientInventory(key, count + 1)}
    />
  );

  const updateIngredientInventory = (itemKey, newCount) => {
    let updatedParsedIngredients = parsedIngredients;

    if (newCount === 0) {
      // Remove item from inventory
      updatedParsedIngredients = parsedIngredients.filter(ingredient => ingredient.key !== itemKey);
    } else {
      updatedParsedIngredients = parsedIngredients.map(ingredient => {
        if (ingredient.key === itemKey) {
          ingredient.count = newCount;
        }
        return ingredient;
      });
    }

    setParsedIngredients(updatedParsedIngredients);
  };


  const addIngredients = () => {
    console.log("BEFORE", ingredientInventory);

    const updatedIngredientInventory = ingredientInventory;

    parsedIngredients.forEach(parsedIngredient => {
      let foundIngredient = false;

      ingredientInventory.forEach((ingredient, i) => {
        if (ingredient.title === parsedIngredient.title) {
          const newIngredientCount = ingredient.count + parsedIngredient.count;
          updatedIngredientInventory[i] = ({...ingredient, count: newIngredientCount });
          foundIngredient = true;
        }
      });

      if (!foundIngredient) {
        updatedIngredientInventory.push(parsedIngredient);
      }
    });

    console.log("AFTER", updatedIngredientInventory);

    dispatch({
      type: 'UPDATE_INGREDIENT_INVENTORY',
      ingredientInventory: updatedIngredientInventory
    });

    navigation.navigate('InventoryAddIngredientsAdded');

    setParsedIngredients([]);
  };

  const onPressBack = () => {
    navigation.navigate('InventoryAddIngredientsPicture');
    setParsedIngredients([]);
  };

  return (
    <PageBackground source={screen}>
      <BackButton onPress={() => onPressBack()} />

      <View style={[whitePanelStyles.position, whitePanelStyles.size, whitePanelStyles.style]}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={parsedIngredients}
          renderItem={({item}) => renderItem(item)}
        />
      </View>

      <StyledButton
        style={[primaryButtonStyles.position, primaryButtonStyles.size]}
        onPress={() => addIngredients()}
      />
    </PageBackground>
  );
};

export default withNavigation(InventoryAddIngredientsSubmit);
