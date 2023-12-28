import { TouchableOpacity, View } from 'react-native';

interface ListItemRootProps {
  children: React.ReactNode
  onPress?: () => void
}

export function ListItemRoot({ children, onPress }: ListItemRootProps) {
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