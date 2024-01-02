import { View } from 'react-native'

interface OnRightProps {
  children: React.ReactNode
}

export function ListMarketOnRight({ children }: OnRightProps) {
  return (
    <View>
      {children}
    </View>
  )
}