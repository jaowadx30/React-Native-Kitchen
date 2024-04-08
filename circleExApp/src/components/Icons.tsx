import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name:string;
}>

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
        return <Icon name='circle-thin' size={38} color='#C0C0C0'/>
        break;
    case 'cross':
      return <Icon name='times' size={38} color='#800020'/>
      break;
  
    default:
      return <Icon name='pencil' size={38} color='#DAF7A6'/>;
        
  }
}

export default Icons