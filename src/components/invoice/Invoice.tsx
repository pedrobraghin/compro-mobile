import { Pressable, Text, View } from 'react-native'
import { type IRecentInvoice } from '../../@types/invoice'

export default function Invoices(props: IRecentInvoice) {
  return (
      <View className='flex-row items-center justify-between px-8 py-4 w-full'>
        <View className='flex-col space-y-2'>
          <Text className='text-black text-[16px]'>{props.products} Produtos</Text>
          <Pressable><Text className='text-general-darkRed text-[10px]'>VER LISTA</Text></Pressable>
        </View>
        <View>
          <Text className='text-general-darkRed text-[16px]'>
            R$ {props.value}
          </Text>
        </View>
      </View>
    )
}
