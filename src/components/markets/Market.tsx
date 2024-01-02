import { View, Text } from 'react-native'
import { MarketListItem } from '../../components/markets/MarketListItem'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

interface MarketProps {
  name: string
  products: number
}

export default function Market({ name = 'Supermercado', products = 0 }: MarketProps) {
  return (
    <View className="flex-1 px-4 bg-white">
      <MarketListItem.Root>
        <MarketListItem.Icon />

        <MarketListItem.OnCenter>
          <View>
            <Text className='font-bold'>{name}</Text>
            <View className='flex-row'>
              <Text className='font-bold text-general-darkRed'>{products} </Text>
              <Text className='text-general-darkRed'>Produtos cadastrados</Text>
            </View>
          </View>
        </MarketListItem.OnCenter>

        <MarketListItem.OnRight>
          <Ionicons
            name="chevron-forward"
            size={24}
            color={Colors.general.darkRed}
          />
        </MarketListItem.OnRight>
      </MarketListItem.Root>
    </View>
  )
}
