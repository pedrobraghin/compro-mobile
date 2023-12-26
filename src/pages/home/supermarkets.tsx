import { PrimaryButton } from '../../components';
import { StyledView, StyledText } from '../../constants/StyledComponents';

export function SupermarketsTab() {
  return (
    
<StyledView className="flex-1 justify-center space-y-4 items-center">
			<StyledView
				id="textArea"
				className="flex-col h-auto items-center mb-10 space-y-14"
			>
				<StyledText className="text-lg text-center font-bold">
					Nenhum mercado cadastrado
				</StyledText>
				<StyledText className="text-lg w-48 text-center font-bold">
					Cadastre seu primeiro Supermercado
				</StyledText>
			</StyledView>
			<PrimaryButton text="Cadastrar Supermercado" />
		</StyledView>
  )
}