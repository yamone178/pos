import CategoryCreate from "@/components/category-create"
import CategoryTable from "@/components/category_table/page"
import ProductCreate from "@/components/product-create"
import ProductTable from "@/components/product_table/page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Products = () => {
  return (
    <div className=" p-6  mt-5">
        <Tabs defaultValue="product" >
  <TabsList className="w-[390px]">
    <TabsTrigger className=" w-[180px]" value="product">Product</TabsTrigger>
    <TabsTrigger className=" w-[180px]" value="category">Category</TabsTrigger>
  </TabsList>
  <TabsContent value="product">
    <div className=" grid grid-cols-5 gap-8">
        <div className=" col-span-2 border border-gray-300 p-5 mt-5 rounded-xl">
            
            <h2 className=" mb-4 font-semibold text-xl">Create Product</h2>
            <ProductCreate />
        </div>
        <div className=" col-span-3">
            <ProductTable />
        </div>
    </div>
       
  </TabsContent>
  <TabsContent value="category">
  <div className=" grid grid-cols-5 gap-8">
        <div className=" col-span-2 border border-gray-300 p-5 mt-5 rounded-xl h-fit">
            
            <h2 className=" mb-4 font-semibold text-xl">Create Product</h2>
            <CategoryCreate />
        </div>
        <div className=" col-span-3">
            <CategoryTable />
        </div>
    </div>
  </TabsContent>
</Tabs>
    </div>
  )
}

export default Products
