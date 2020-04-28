import React from 'react'
import {View, Stylesheet} from 'react-native'
import params from '../params'
import Mine from './Mine'

export default props => {
    const {mined, nearMines, opened } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (explode) styleField.push(styles.exploded)
    if (styleField.length === 1) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0){
        if (nearMines == 1) color = 'red'
        if (nearMines == 2) color = 'green'
        if (nearMines > 2 && nearMines < 6) color = 'pink'
        if (nearMines > 6) color = 'blues'
    }   

    return(
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ? <Text style={[styles.label, {color: color}]}>{nearMines}</Text> : false }
            {mined && opened  ? <Mine /> : false}
        </View>
    )
}

const styles = Stylesheet.create({
    field:{
        height:params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular:{
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened:{
        backgroundColor: '#999',
        borderLeftColor: '#777',
        alignItens: 'center',
        justifyContent: 'center'
    },
    label:{
        fontSize: params.fontsize,
        fontWeight: 'bold',
    },
    exploded:{
        backgroundColor:'red',
        borderColor: 'red'
    }
})
