import { Search, Menu, Bell, ChevronDown } from "lucide-react"
// Using standard img in place of next/image for Vite React

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onToggleSidebar} className="lg:hidden">
          <Menu size={24} />
        </button>

        <div className="relative flex-1 max-w-xs hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-700">Live</span>
        </div>

        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
          English
          <span>▼</span>
        </button>

        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} className="text-gray-600" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Martins"
              alt="Martins"
              width={40}
              height={40}
            />
          </div>

          <div className="text-left hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">Martins Chidume</p>
            <p className="text-xs text-gray-500">ID: 123456</p>
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
