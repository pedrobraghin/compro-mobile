import { View } from 'react-native';

interface ListMarketCenterProps {
  children: React.ReactNode
}

export function ListMarketCenter({ children }: ListMarketCenterProps) {
  return (
    <View className='flex-1'>
      {children}
    </View>
  )
}