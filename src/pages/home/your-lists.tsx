import { View, Text } from 'react-native';
import { PrimaryButton } from '../../components';

export function YourListsTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text>
        Nenhum mercado cadastrado
      </Text>
      <Text>Cadastre seu primeiro mercado</Text>
      <PrimaryButton text='Cadastrar supermercado' />
    </View>
  )
}