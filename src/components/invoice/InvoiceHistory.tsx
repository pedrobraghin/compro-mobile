import RecentList from './Invoice'

export default function InvoiceHistory() {
  return (
    <RecentList
      name="Victor"
      date={new Date()}
      value={123}
      products={12}
    ></RecentList>
  )
}
