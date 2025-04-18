import { useGetOrders } from "@/services/queries"
import { columns } from "./columns"
import { DataTable } from "./data-table"



export default  function OrderTable() {

    

    const {data, isLoading, error} = useGetOrders()
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
