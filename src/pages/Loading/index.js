import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useStateValue } from '../../utils/state';
import {retrieveData} from "../../utils/asyncStorage";
import { withNavigation } from 'react-navigation';

const Loading = (props) => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    retrieveData('SUBSCRIPTION').then(subscription => {
      if (subscription) {
        dispatch({
          type: 'UPDATE_SUBSCRIPTION',
          subscription,
        });
      }
    });

    retrieveData('SUBSCRIPTION_ACTIVE').then(subscriptionActive => {
      if (subscriptionActive) {
        dispatch({
          type: 'UPDATE_SUBSCRIPTION_ACTIVE',
          subscriptionActive,
        });
      }
    });

    retrieveData('INGREDIENT_INVENTORY').then(ingredientInventory => {
      if (ingredientInventory) {
        dispatch({
          type: 'UPDATE_INGREDIENT_INVENTORY',
          ingredientInventory,
        });
      }
    });


    retrieveData('SUBSCRIBE_FORM_DATA').then(subscribeFormData => {
      if (subscribeFormData) {
        dispatch({
          type: 'UPDATE_SUBSCRIBE_FORM_DATA',
          subscribeFormData,
        });
      }

      props.navigation.replace('Start');
    });
  }, []);

  return (
    <View />
  )
};

export default withNavigation(Loading);