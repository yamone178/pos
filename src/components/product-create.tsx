import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from './ui/button'
import { SelectCategory } from './select-category'
import { useCreateProduct, useUpdateProduct } from '@/services/mutation'
import { uid } from 'uid';
import { generateProductCode } from '@/hooks/use-autogenerate'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { setUpdateProductValue } from '@/redux/OrderSlice'
import { toast } from 'sonner'

const formSchema = z.object({

  category_id: z.string({
    required_error : "Please choose a category"
  }).min(1,"Category is required"),
  product_name: z.string({
    required_error: "Product Name is required"
  }).min(1, "Prduct Name is required"),
  price: z.number({
    required_error: "Price is required"
  }).min(1, "Price is required") 
})

const ProductCreate = () => {
  
  const productCreateMutation = useCreateProduct()
  const productUpdateMutation = useUpdateProduct()
  const updateValues = useSelector((state: RootState) => state.order.update_product);
  const dispatch = useDispatch()

 console.log(updateValues);
 
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    category_id: "",
    product_name: "",
    price: 0,
  },
})

useEffect(() => {
  if (updateValues) {
    form.reset({
      category_id: updateValues.category_id || "",
      product_name: updateValues.product_name || "",
      price: updateValues.price || 0,
    });
  }
}, [updateValues, form]);



  function onSubmit(values: z.infer<typeof formSchema>) {
    const newProduct = {
      id: updateValues? updateValues.id : uid(5),
      category_id: values.category_id,
      product_name: values.product_name,
      product_code: updateValues ? updateValues.product_code : generateProductCode(),
      price: values.price

    }

    if (updateValues) {
      try {
        productUpdateMutation.mutate({id: updateValues.id, newProduct: newProduct},{
          onSuccess: () =>{
            form.reset({
              category_id:"",
              product_name:"",
              price:0,
            });

            dispatch(setUpdateProductValue(null))

            toast.success('The Product is updated successfully!')
          }
        })
       
        

      } catch (error) {
        console.log(error);
        
      }
    }else{
      productCreateMutation.mutate(newProduct)
    }
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
          
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem className=' mt-4'>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <SelectCategory value={field.value}  onChange={field.onChange}/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="product_name"
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn"  {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type='number' placeholder="500" {...field} onChange={(e) =>
            field.onChange(Number(e.target.value) === 0 ? "" : Number(e.target.value))
          }/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

      
        <Button type="submit" className='mt-4'>{ updateValues ? 'Update' :'Submit'}</Button>
      </form>
    </Form>
  )
}

export default ProductCreate
