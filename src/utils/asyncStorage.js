import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};