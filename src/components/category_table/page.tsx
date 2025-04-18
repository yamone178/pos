import { useGetCategories} from "@/services/queries"
import { columns } from "./columns"
import { DataTable } from "./data-table"



export default  function CategoryTable() {

    

    const {data, isLoading, error} = useGetCategories()
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    

  return (
    <div className="container mx-auto py-5">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
