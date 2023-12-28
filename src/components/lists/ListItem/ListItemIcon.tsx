import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { Text, View } from 'react-native';

type IconType = "cart" | "steak" | "cookie" | "apple"

interface IconProps {
  type: IconType
  color?: string
}


export function ListItemIcon({ type, color = Colors.general.darkGray }: IconProps) {

  switch (type) {
    case 'cart': {
      return <Ionicons name="cart-outline" size={24} color={color} />
    }
    case 'steak': {
      return <MaterialCommunityIcons name="food-steak" size={24} color={color} />
    }
    case 'cookie': {
      return <MaterialCommunityIcons name="cookie" size={24} color={color} />
    }
    case 'apple': {
      return <MaterialCommunityIcons name="food-apple" size={24} color={color} />
    }
    default: {
      return (
        <View>
          <Text>Icon not found</Text>
        </View>
      )
    }
  }
}