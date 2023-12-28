import { View } from 'react-native';

interface ListItemCenterProps {
  children: React.ReactNode
}

export function ListItemCenter({ children }: ListItemCenterProps) {
  return (
    <View className='flex-1'>
      {children}
    </View>
  )
}