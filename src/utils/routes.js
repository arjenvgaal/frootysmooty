import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Start from '../pages/Start';
import DeliverySubscribeDuo from '../pages/DeliverySubscribeDuo';
import DeliverySubscribeFamily from '../pages/DeliverySubscribeFamily';
import DeliverySubscribeSolo from '../pages/DeliverySubscribeSolo';
import DeliverySubscribeFormPersonal from '../pages/DeliverySubscribeFormPersonal';
import DeliverySubscribeFormPayment from '../pages/DeliverySubscribeFormPayment';
import DeliveryEditSolo from '../pages/DeliveryEditSolo';
import DeliveryEditDuo from '../pages/DeliveryEditDuo';
import InventoryAddIngredientsPicture from '../pages/InventoryAddIngredientsPicture';
import InventoryAddIngredientsSubmit from '../pages/InventoryAddIngredientsSubmit';
import InventoryAddIngredientsAdded from '../pages/InventoryAddIngredientsAdded';
import SmoothiesSmoothieComplete from '../pages/SmoothiesSmoothieComplete';
import SmoothiesSmoothie from '../pages/SmoothiesSmoothie';
import DeliveryEditFamily from '../pages/DeliveryEditFamily';
import Loading from '../pages/Loading';
import Smoothies from '../pages/Smoothies';
import Partners from '../pages/Partners';
import Inventory from '../pages/Inventory';
import { fadeIn } from 'react-navigation-transitions';

const NavigationRouter = createAppContainer(createStackNavigator(
  {
    Start,
    Loading,
    DeliverySubscribeSolo,
    DeliverySubscribeDuo,
    DeliverySubscribeFamily,
    DeliverySubscribeFormPersonal,
    DeliverySubscribeFormPayment,
    Inventory,
    Smoothies,
    Partners,
    DeliveryEditSolo,
    DeliveryEditDuo,
    DeliveryEditFamily,
    InventoryAddIngredientsPicture,
    InventoryAddIngredientsSubmit,
    InventoryAddIngredientsAdded,
    SmoothiesSmoothie,
    SmoothiesSmoothieComplete,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      gesturesEnabled: true
    },
    transitionConfig: () => fadeIn(),
  }
), {
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    gesturesEnabled: true
  },
});

export default NavigationRouter;
