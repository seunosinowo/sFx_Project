import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"

const navigationItems = [
  {
    section: "Payments",
    items: [
      { name: "Transactions", icon: "📊" },
      { name: "Customers", icon: "👥" },
      { name: "Payouts", icon: "💰" },
      { name: "Balances", icon: "⚖️" },
      { name: "Subscriptions", icon: "🔄" },
      { name: "Payment plans", icon: "📋" },
    ],
  },
  {
    section: "Commerce",
    items: [
      { name: "Referrals", icon: "🔗" },
      { name: "Audit logs", icon: "📝" },
      { name: "Settings", icon: "⚙️" },
    ],
  },
]

export function Sidebar({ isSidebarOpen, onOpenChange }: { isSidebarOpen: boolean; onOpenChange?: (open: boolean) => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>("Payments")
  const isMobile = useIsMobile()

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-56" : "w-0"
        } bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 hidden lg:block`}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SFx</span>
            </div>
            <span className="font-bold text-lg text-gray-900">SFx</span>
          </div>
        </div>

        <nav className="p-4 space-y-6">
          {navigationItems.map((section) => (
            <div key={section.section}>
              <button
                onClick={() => setExpandedSection(expandedSection === section.section ? null : section.section)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 mb-3 hover:text-gray-900"
              >
                {section.section}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${expandedSection === section.section ? "rotate-180" : ""}`}
                />
              </button>

              {expandedSection === section.section && (
                <ul className="space-y-2 ml-0">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <button className="flex items-center gap-3 text-gray-600 hover:text-gray-900 text-sm w-full p-2 rounded hover:bg-gray-50">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Mobile drawer (only render on mobile) */}
      {isMobile && (
        <Drawer open={isSidebarOpen} onOpenChange={onOpenChange} direction="left">
          <DrawerContent>
            <DrawerHeader className="border-b">
              <DrawerTitle className="text-lg">Menu</DrawerTitle>
            </DrawerHeader>

            <nav className="p-4 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.section}>
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.section ? null : section.section)}
                    className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 mb-3"
                  >
                    {section.section}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expandedSection === section.section ? "rotate-180" : ""}`}
                    />
                  </button>

                  {expandedSection === section.section && (
                    <ul className="space-y-2 ml-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <button
                            className="flex items-center gap-3 text-gray-700 text-sm w-full p-2 rounded hover:bg-gray-100"
                            onClick={() => onOpenChange?.(false)}
                          >
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
