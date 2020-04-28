import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from '.src/components/Field'


export default function App() {
  return (
    <View style={styles.container}>
      <Text >Tamanho da Grade:{params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened/>
      <Field opened nearMine={2} />
      <Field mined />
      <Field mined opened />
      <Field mined opened />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
