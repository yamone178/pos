import { useGetProducts } from "@/services/queries"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { getProducts } from "@/services/api"



export default  function ProductTable() {

    

    const {data, isLoading, error} = useGetProducts()
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
