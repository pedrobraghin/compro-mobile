import { TouchableOpacity, View } from 'react-native';

interface ListMarketRootProps {
  children: React.ReactNode
  onPress?: () => void
}

export function ListMarketRoot({ children, onPress }: ListMarketRootProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        className='justify-between flex-row items-center p-4 border border-general-darkGray rounded-md'
        style={{ gap: 10 }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}