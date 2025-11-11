import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { MainContent } from "./main-content"
import { ProfileSidebar } from "./profile-sidebar"

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 flex gap-6 overflow-hidden">
          <MainContent />
          <ProfileSidebar />
        </div>
      </div>
    </div>
  )
}
