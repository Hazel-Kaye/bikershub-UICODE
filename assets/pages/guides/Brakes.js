import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const Brakes = ({ navigation }) => {
  const openYouTubeLink = () => {
    Linking.openURL('https://youtu.be/DHqolo-V1RI?si=cWlIREyiyB0yz86r');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clickable Image to Open YouTube Video */}
      <TouchableOpacity onPress={openYouTubeLink}>
        <Image source={require('../../img/Brakes.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Tools and Materials Section */}
      <View style={styles.toolsAndMaterials}>
        <Text style={styles.toolsAndMaterialsTitle}>Tools and Materials Needed:</Text>
        <Text style={styles.toolItem}>- Allen wrench set</Text>
        <Text style={styles.toolItem}>- Screwdriver</Text>
        <Text style={styles.toolItem}>- Pliers</Text>
        <Text style={styles.toolItem}>- Cable Cutter</Text>
        <Text style={styles.toolItem}>- Adjustable Wrench</Text>
        <Text style={styles.toolItem}>- Torque Wrench</Text>
        <Text style={styles.toolItem}>- Rubber Mallet</Text>
        <Text style={styles.toolItem}>- Bike Stand (Optional)</Text>
      </View>

      {/* Step-by-Step Guide */}
      <View style={styles.steps}>
        <Text style={styles.stepsTitle}>Steps:</Text>
        <Text style={styles.stepItem}>1. Loosen the bolts securing the handlebars.</Text>
        <Text style={styles.stepItem}>2. Adjust the handlebar height and angle as desired.</Text>
        <Text style={styles.stepItem}>3. Tighten the bolts to secure the handlebars.</Text>
        <Text style={styles.stepItem}>4. Ensure all bolts are tight and handlebars are stable.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  toolsAndMaterials: {
    marginBottom: 20,
  },
  toolsAndMaterialsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  toolItem: {
    fontSize: 16,
    marginLeft: 20,
    color: '#555',
  },
  steps: {
    marginTop: 20,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  stepItem: {
    fontSize: 16,
    marginLeft: 20,
    color: '#555',
    marginBottom: 5,
  },
});

export default Brakes;
