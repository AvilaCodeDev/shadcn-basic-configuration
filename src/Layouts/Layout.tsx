
import { AppSidebar } from "@/components/app-sidebar/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TituloLayout } from "@/components/ui/TituloLayout"
import { VistaContextProvider } from "@/context/VistaContext"
import React, { useEffect } from "react"

export const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <VistaContextProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <TituloLayout />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </VistaContextProvider>
  )
}
