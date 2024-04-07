import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


//navigation
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'


import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}:DetailsProps) => {
  const {productId} = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text>Details:{productId}</Text>
      <Button
      title='GO Home'
      // onPress={()=>navigation.navigate('Home')}
      onPress={()=>navigation.goBack()}
       />
       <Button
      title='GO back to first screen'
      // onPress={()=>navigation.navigate('Home')}
      // onPress={()=>navigation.pop(1)}
      onPress={()=>navigation.popToTop()}
       />
    </View>
  )
}

export default Details

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