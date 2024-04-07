import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import Details from './Details'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>HomeScreen</Text>
      <Button
       title='Go to details'
      //  onPress={()=>navigation.navigate('Details',{productId:'345'})}
      // onPress={()=>navigation.navigate('Details')}
      onPress={()=>navigation.push('Details',{productId:'436'})}
       />


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'#000'
    }
})