import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MountainBikes = () => {
  const mountainBikesData = [
    {
      id: 1,
      name: 'Rocky Mountain Trail Bike',
      price: 60,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
    {
      id: 2,
      name: 'Mud Hopper Mountain Bike',
      price: 75,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
    {
      id: 3,
      name: 'Peak Rider Mountain Bike',
      price: 80,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
    {
      id: 4,
      name: 'Canyon Cruiser Mountain Bike',
      price: 85,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
    {
      id: 5,
      name: 'Desert Storm MTB',
      price: 90,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
    {
      id: 6,
      name: 'Mountain Thunder Bike',
      price: 100,
      imageUrl: require('../../img/logo.png'), // Using logo.png as the sample image
    },
  ];

  const handlePress = (item) => {
    // Handle the bike card press, such as navigating to a detailed page or showing more info
    console.log(`${item.name} selected!`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.bikeCard}>
      <Image source={item.imageUrl} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>₱{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mountainBikesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Ensure the keyExtractor is using string values
        numColumns={2}
        contentContainerStyle={styles.listContainer} // Add padding for FlatList items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  bikeCard: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff', // Ensure a background color for the card
  },
  bikeImage: {
    width: 130,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain', // Ensures the image is properly scaled
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text
  },
  bikePrice: {
    fontSize: 14,
    color: '#2ecc71', // Green color for the price
  },
  listContainer: {
    paddingBottom: 10, // Add bottom padding to avoid cutting off items
  },
});

export default MountainBikes;