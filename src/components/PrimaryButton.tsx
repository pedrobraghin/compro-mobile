import { TouchableHighlight, Text } from 'react-native';
import Colors from '../../constants/Colors';

interface PrimaryButtoProps {
  onPress?: () => void;
  text: string;
}

export function PrimaryButton({ onPress, text }: PrimaryButtoProps) {
  return (
    <TouchableHighlight onPress={onPress} style={{
      backgroundColor: Colors.general.darkRed,
      borderRadius: 32,
      width: 'auto',
      paddingHorizontal: 16,
      paddingVertical: 12,
      alignItems: 'center',
    }}>
      <Text style={{ color: Colors.general.textColor }}>
        {text}
      </Text>
    </TouchableHighlight>
  )
}