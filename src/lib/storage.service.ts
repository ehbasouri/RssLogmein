import AsyncStorage from '@react-native-async-storage/async-storage';

async function getValue(key: string) {
  const value: any = await AsyncStorage.getItem(key);
  try {
    const parsedValue = JSON.parse(value);
    return parsedValue;
  } catch (error) {
    return value;
  }
}

function setValue(key: string, value: string | object) {
  var validValue: any = value;
  if (typeof value !== 'string') {
    validValue = JSON.stringify(value);
  }
  return AsyncStorage.setItem(key, validValue);
}

export const StorageManager = {
  getValue,
  setValue,
};
