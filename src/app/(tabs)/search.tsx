import { Text, View } from 'react-native';
import { ListItem } from '../../components/lists/ListItem';

export default function Search() {
	return (
		<View className='flex-1 px-4 bg-white'>
			<ListItem.Root>
				<ListItem.Icon type='apple' />

				<ListItem.OnCenter>
					<View>
						<Text>Título</Text>
						<Text>Descrição</Text>
					</View>
				</ListItem.OnCenter>

				<ListItem.OnRight>
					<Text>
						R$19,00
					</Text>
				</ListItem.OnRight>
			</ListItem.Root>
		</View>
	)
}