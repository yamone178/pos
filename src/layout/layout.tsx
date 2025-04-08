// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "sonner"
import { AppSidebar } from "../components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { Outlet } from "react-router-dom"
 
export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" p-5 w-[100%]">
        <SidebarTrigger />
        <Outlet />
      </main>
      <Toaster
      toastOptions={{
       
        classNames: {
          error: 'bg-red-400',
          success: ' !text-green-700',
          warning: 'text-yellow-700',
          info: 'bg-blue-400',
        },
      }}
      />
    </SidebarProvider>
  )
}