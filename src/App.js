import React from "react";
import {StateProvider} from "./utils/state";
import { storeData } from './utils/asyncStorage'
import NavigationRouter from './utils/routes';

const App = () => {
  const initialState = {
    subscription: 'Solo',
    subscriptionActive: false,
    ingredientInventory: [
      { key: 'Banana', title: 'Banana', count: 4},
      { key: 'Apple', title: 'Apple', count: 2},
    ],
    subscribeFormData: {
      name: '',
      birthDate: '',
      email: '',
      street: '',
      postalCode: '',
      city: '',
      cardNumber: '',
      cardHolderName: '',
      cardExpirationDate: '',
    }
  };

  // Reset data
  // storeData('SUBSCRIPTION', initialState.subscription);
  // storeData('SUBSCRIPTION_ACTIVE', initialState.subscriptionActive);
  // storeData('INGREDIENT_INVENTORY', initialState.ingredientInventory);
  // storeData('SUBSCRIBE_FORM_DATA', initialState.subscribeFormData);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'RESET_STORE': {
        storeData('SUBSCRIPTION', initialState.subscription);
        storeData('SUBSCRIPTION_ACTIVE', initialState.subscriptionActive);
        storeData('INGREDIENT_INVENTORY', initialState.ingredientInventory);
        storeData('SUBSCRIBE_FORM_DATA', initialState.subscribeFormData);

        return {
          ...initialState,
        }
      }

      case 'UPDATE_SUBSCRIBE_FORM_DATA': {
        storeData('SUBSCRIBE_FORM_DATA', action.subscribeFormData);

        return {
          ...state,
          subscribeFormData: action.subscribeFormData,
        }
      }

      case 'UPDATE_SUBSCRIPTION': {
        storeData('SUBSCRIPTION', action.subscription);

        return {
          ...state,
          subscription: action.subscription,
        }
      }

      case 'UPDATE_SUBSCRIPTION_ACTIVE': {
        storeData('SUBSCRIPTION_ACTIVE', action.subscriptionActive);

        return {
          ...state,
          subscriptionActive: action.subscriptionActive,
        }
      }

      case 'UPDATE_INGREDIENT_INVENTORY': {
        storeData('INGREDIENT_INVENTORY', action.ingredientInventory);

        return {
          ...state,
          ingredientInventory: action.ingredientInventory,
        }
      }

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationRouter />
    </StateProvider>
  );
};

export default App;