```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getValue(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value); // Assuming JSON storage
    } else {
      return null; // Handle the case where the key doesn't exist
    }
  } catch (error) {
    console.error('Error retrieving value:', error);
    return null; // Return null or handle the error appropriately
  }
}

// Usage example:
getValue('myKey').then((value) => {
  console.log('Retrieved value:', value);
});
```