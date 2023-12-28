import { TextInput } from 'react-native'

interface TextInputProps {
  onTextChange?: (text: string) => void
  placeholder?: string
}

export function Input ({ onTextChange, placeholder }: TextInputProps) {
  return <TextInput onChangeText={onTextChange} placeholder={placeholder} />
}
