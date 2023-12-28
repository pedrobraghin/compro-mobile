import React from 'react'
import { BottomSheet, Input, PrimaryButton } from '../../components'
import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'

interface AddSupermarketBottomSheetProps {
  onClose: () => void
}

export function SupermarketsTab() {
  const [openSheet, setOpenSheet] = React.useState(false)

  function closeSheet() {
    setOpenSheet(false)
  }

  return (

    <View className="flex-1 justify-center space-y-4 items-center">
      <View
        id="textArea"
        className="flex-col h-auto items-center mb-10 space-y-14"
      >
        <Text className="text-lg text-center font-bold">
          Nenhum mercado cadastrado
        </Text>
        <Text className="text-lg w-48 text-center font-bold">
          Cadastre seu primeiro Supermercado
        </Text>
      </View>
      <PrimaryButton text="Cadastrar Supermercado" onPress={() => {
        setOpenSheet(true)
      }} />
      {openSheet && <AddSupermarketBottomSheet onClose={closeSheet} >
      </AddSupermarketBottomSheet>}
    </View>
  )
}

function AddSupermarketBottomSheet({ onClose }: AddSupermarketBottomSheetProps) {
  return (
    <BottomSheet onClose={onClose}>
      <Text>Teste de texto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sed vitae voluptates eligendi! Cupiditate fuga aspernatur architecto officiis autem quas expedita non earum porro. Quod, aliquam fuga! Ea, illum ratione?</Text>
      <Input placeholder='Nome' />
      <Button title='Ir para buscar' onPress={() => {
        router.push('/(tabs)/profile')
        onClose()
      }} />
    </BottomSheet>
  )
}
