import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ListItemComponent = ({ data, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.brands}>{data.brands.map(brand => brand.toUpperCase()).join(' ')}</Text>
    <Text style={styles.title}>{data.product}</Text>
    <Text style={styles.description}>{data.description}</Text>
    <Button color="#003c80" title="Ver más" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003c80',
    paddingTop: 10,
    paddingBottom: 10
  },
  brands: {
    fontSize: 12
  },
  description: {
    marginBottom: 20
  }
});

export default ListItemComponent;
