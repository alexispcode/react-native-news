import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ListItemComponent = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{data.product}</Text>
    <Text style={styles.brands}>{data.brands.join(' ')}</Text>
    <Text style={styles.description}>{data.description}</Text>
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
    color: '#003c80'
  },
  brands: {
    paddingTop: 10,
    paddingBottom: 10
  },
  description: {
  }
});

export default ListItemComponent;
