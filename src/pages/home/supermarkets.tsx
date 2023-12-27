import { PrimaryButton } from '../../components';
import { View, Text } from 'react-native';

export function SupermarketsTab() {
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
			<PrimaryButton text="Cadastrar Supermercado" />
		</View>
	)
}