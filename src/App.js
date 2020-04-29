import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './params'
import Field from './components/Field'
import MineField from './components/MineField'
import{ createMinedBoard } from './functions' 





export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <Text >Tamanho da Grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
       <View style = {styles.board}>
          <MineField styele={flexDirection = 'row'} board={this.state.board}/>
       </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
