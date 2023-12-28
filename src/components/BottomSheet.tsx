import React from 'react'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { StatusBar } from 'expo-status-bar'

interface BottomSheetProps {
  onClose?: () => void
  children?: React.ReactNode
  overrideSnapPoints?: string[]
}

export function BottomSheet({ onClose, children, overrideSnapPoints = ['30%', '90%'] }: BottomSheetProps) {
  const sheetRef = React.useRef<BottomSheetModal>(null)
  const snapPoints = React.useMemo(() => overrideSnapPoints, [])

  React.useEffect(() => {
    if (sheetRef.current == null) {
      return
    }
    sheetRef.current.present()
  }, [])

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: '#fff' }}
      enablePanDownToClose
      onDismiss={onClose}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.6}
          pressBehavior="close"
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
    >
      <StatusBar style='light' />
      {children}
    </BottomSheetModal>
  )
}
