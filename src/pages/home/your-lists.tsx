import { Text, View } from 'react-native';
import { PrimaryButton } from '../../components';

export function YourListsTab() {
	return (
		<View className="flex-1 justify-center space-y-4 items-center">
			<View
				id="textArea"
				className="flex-col h-auto items-center mb-10 space-y-14"
			>
				<Text className="text-lg text-center font-bold">
					Nenhuma lista cadastrada
				</Text>
				<Text className="text-lg w-44 text-center font-bold">
					Crie sua primeira Lista de compras
				</Text>
			</View>
			<PrimaryButton text="Cadastrar nova lista" />
		</View>
	);
}
