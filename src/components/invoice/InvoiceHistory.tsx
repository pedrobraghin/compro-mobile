import { Pressable, Text, View } from 'react-native'
import Invoice from './Invoice'
import { type ReactElement, useState } from 'react'

export default function InvoiceHistory() {
  const [invoices, setInvoices] = useState<ReactElement[]>([])

  function generateInvoice() {
    const newInvoices: ReactElement[] = []
    for (let i = 0; i < 6; i++) {
      newInvoices.push(
        <Invoice
          key={i}
          id={`${i}`}
          products={i}
          date={new Date(`2023-${i}-01`)}
          value={33.33}
        />
      )
    }

    setInvoices(newInvoices)
  }

  return (
    <View>
      <Pressable onPress={generateInvoice}>
        <Text>Click</Text>
      </Pressable>
      {invoices}
    </View>
  )
}
