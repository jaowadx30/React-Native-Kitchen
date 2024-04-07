import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


//Constants
import { currencyByTaka } from './constants';
//components
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {

  const [inputValue,setInputValue] = useState('')
  const [resultValue,setResultValue] = useState('')
  const [targetCurrency,setTargetCurrency] = useState('')

  const buttonPressed = (targetValue:Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text:'Enter a value to convert',
        backgroundColor:'#0b2d39',
        textColor:'#FFFFFF'
      })
    }
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)){
      const convertedValue = inputAmount*targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 💸`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    else{
      return Snackbar.show({
        text:'Not a valid number to convert',
        backgroundColor:'#be2525',
        textColor:'#0b2d39'
      })
    }
  }


  return (
    <>
      <StatusBar/>
      <View style={styles.container}>
      <Text style={styles.headingText}> Currency Converter App</Text>
        <View style={styles.topContainer}>
          <View style={styles.takaContainer}>
            <Text style={styles.taka}>৳</Text>
            <TextInput
            maxLength={12}
            value={inputValue}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Taka'
            style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
          numColumns={3}
          data={currencyByTaka}
          keyExtractor={item =>item.name}
          renderItem={({item})=>(
            <Pressable style={[
              styles.button,
              targetCurrency===item.name && styles.selected]}
              onPress={()=>buttonPressed(item)}
              >
                <CurrencyButton {...item}/>
            </Pressable>
          )} //in renderItem, every item has to be destructured. This is repeating part.
          />
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    color:'#C0C0C0',
    fontWeight:'bold',
    justifyContent:'center',
    marginTop:15,
    marginLeft:10
  },
  container: {
    flex: 1,
    backgroundColor: '#0f0726',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#C0C0C0',
    fontWeight: '800',
  },
  taka: {
    marginRight: 8,

    fontSize: 22,
    color: '#C0C0C0',
    fontWeight: '800',
  },
  takaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 70,
    //paddingBottom:10,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
