import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {withNavigation} from "react-navigation";
import Icons from "react-native-vector-icons/MaterialIcons";
import { useStateValue } from '../../utils/state';

const ingredientRowStyles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 125,
    left: 25,
  },
  size: {
    width: 325,
    height: 50,
  },
  style: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E1E1E1',
  },
  horizontalRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  titleLabel: {
    fontFamily: "Stilu-SemiBold",
    fontSize: 15,
    color: '#4a4a4a',
  },
  countLabel: {
    paddingRight: 10,
    fontFamily: "Stilu-Regular",
    fontSize: 14,
    color: '#4a4a4a',
  }
});

const IngredientRow = ({ title, count, onLeadingPress, onTrailingPress, navigation }) => {
  const leadingButtonIcon = count > 1 ? 'keyboard-arrow-down' : 'close';

  return (
      <View style={[ingredientRowStyles.size, ingredientRowStyles.style, ingredientRowStyles.horizontalRow]}>
        <View style={[ingredientRowStyles.horizontalRow, { flex: 1, paddingLeft: 20 }]}>
          <TouchableOpacity onPress={onLeadingPress}>
            <Icons name={leadingButtonIcon} size={24} color="#F06129" style={{ marginLeft: -15 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onTrailingPress} style={[{ paddingLeft: 10 }]}>
            <Icons name="keyboard-arrow-up" size={24} color="#F06129" />
          </TouchableOpacity>
          <Text style={[ingredientRowStyles.titleLabel, { paddingLeft: 20 }]}>{title}</Text>
        </View>
        <View>
          <Text style={[ingredientRowStyles.countLabel, { paddingRight: 40 }]}>{count}</Text>
        </View>
      </View>
  );
};

export default withNavigation(IngredientRow);