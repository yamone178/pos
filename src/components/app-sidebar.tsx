import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { Link, NavLink } from 'react-router-dom'


// Menu items.
const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Create Order",
      url: "/create-order",
      icon: Inbox,
    },
    {
      title: "Order List",
      url: "/orders",
      icon: Calendar,
    },
    {
      title: "Item",
      url: "/products",
      icon: Search,
    },
    {
      title: "Category",
      url: "#",
      icon: Settings,
    },
  ]

  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
