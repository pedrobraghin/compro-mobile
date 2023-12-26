import { Text } from 'react-native';
import { PrimaryButton } from '../../components';
import { StyledView, StyledText } from '../../constants/StyledComponents';

export function YourListsTab() {
	return (
		<StyledView className="flex-1 justify-center space-y-4 items-center">
			<StyledView
				id="textArea"
				className="flex-col h-auto items-center mb-10 space-y-14"
			>
				<StyledText className="text-lg text-center font-bold">
					Nenhuma lista cadastrada
				</StyledText>
				<Text className="text-lg w-44 text-center font-bold">
					Crie sua primeira Lista de compras
				</Text>
			</StyledView>
			<PrimaryButton text="Cadastrar nova lista" />
		</StyledView>
	);
}
