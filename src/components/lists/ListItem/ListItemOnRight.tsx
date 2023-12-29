import { View } from 'react-native'

interface OnRightProps {
  children: React.ReactNode
}

export function ListItemOnRight({ children }: OnRightProps) {
  return (
    <View>
      {children}
    </View>
  )
}