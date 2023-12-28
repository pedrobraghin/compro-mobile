import { Text, View } from 'react-native'
import { type IRecentInvoice } from '../../@types/invoice'

export default function Invoices(props: IRecentInvoice) {
  return (
      <View className='flex-row items-center justify-between px-8 w-full bg-black'>
        <View className='flex-col space-y-2'>
          <Text className='text-white'>{props.name}</Text>
          <Text className='text-white'>VER LISTA</Text>
        </View>
        <View>
          <Text className='text-white'>
            R$ {props.value}
          </Text>
        </View>
      </View>
    )
}
