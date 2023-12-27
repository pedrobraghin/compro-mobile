import Colors from '../constants/Colors';
import { Text, TouchableOpacity } from 'react-native';

interface PrimaryButtoProps {
	onPress?: () => void;
	text: string;
}

export function PrimaryButton({ onPress, text }: PrimaryButtoProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			className="bg-general-darkRed rounded-3xl px-4 py-3 w-56 items-center"
		>
			<Text style={{ color: Colors.general.textColor }}>{text}</Text>
		</TouchableOpacity>
	);
}
