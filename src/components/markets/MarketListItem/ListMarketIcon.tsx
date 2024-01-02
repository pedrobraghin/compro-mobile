import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'

interface IconProps {
  color?: string
}

export function ListMarketIcon({ color = Colors.general.darkGray }: IconProps) {
  return <Ionicons name="cart-outline" size={30} color={color} />
}
