import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from './ui/button'
import { useCreateCategory,  useUpdateCategory, } from '@/services/mutation'
import { uid } from 'uid';
import { generateCategoryCode, } from '@/hooks/use-autogenerate'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { setUpdateCategoryValue } from '@/redux/OrderSlice'
import { toast } from 'sonner'

const formSchema = z.object({

  category_name: z.string({
    required_error : "Category name is required"
  }).min(1,"Category is required"),
 
})

const CategoryCreate = () => {
  
  const categoryCreateMutation = useCreateCategory()
  const categoryUpdateMutation = useUpdateCategory()
  const updateValues = useSelector((state: RootState) => state.order.update_category);
  const dispatch = useDispatch()

 console.log(updateValues);
 
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    category_name: ""
  },
})

useEffect(() => {
  if (updateValues) {
    form.reset({
      category_name: updateValues.category_name || "",
    
    });
  }else{
    form.reset({
      category_name: ""
    })
  }
}, [updateValues, form]);



  function onSubmit(values: z.infer<typeof formSchema>) {
    const newCategory = {
      id: updateValues? updateValues.id : uid(5),
      category_id: updateValues ? updateValues.category_id :  generateCategoryCode(),
      category_name: values.category_name,
    }

    if (updateValues) {
      categoryUpdateMutation.mutate({id: updateValues.id, newCategory: newCategory},{
        onSuccess: () =>{
          form.reset({
            category_name: ''
          })
        }      
      })

      dispatch(setUpdateCategoryValue(null))

      toast.success("Category is updated!")
    }else{
  
      categoryCreateMutation.mutate(newCategory)
      toast.success("New Category is Created!")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
    
      <FormField
          control={form.control}
          name="category_name"
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="drink"  {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className=' flex justify-between'> 
        <Button type="submit" className='mt-4'>{ updateValues ? 'Update':'Create'}</Button>

        {
          updateValues &&
        <Button 
        onClick={() => dispatch(setUpdateCategoryValue(null))}
        type="submit" className='mt-4 bg-gray-400'>Go to Create</Button>
        }
        
        </div>

      
      

      </form>
    </Form>
  )
}

export default CategoryCreate
