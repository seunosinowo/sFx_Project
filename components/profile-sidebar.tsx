import { useState } from "react"
import { ChevronRight } from "lucide-react"

const messages = [
  {
    id: 1,
    name: "Peter Jophet",
    message: "Hello, how are you?",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
    color: "bg-teal-500",
    initials: "PJ",
  },
  {
    id: 2,
    name: "Leo Anime",
    message: "Let me know about this?",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
    color: "bg-purple-600",
    initials: "LA",
  },
  {
    id: 3,
    name: "James Robinson",
    message: "I need your urgent attention",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    color: "bg-teal-500",
    initials: "JR",
  },
  {
    id: 4,
    name: "Lupita Jonah",
    message: "Thank you so much for this",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lupita",
    color: "bg-amber-500",
    initials: "LJ",
  },
]

export function ProfileSidebar() {
  const [activeTab, setActiveTab] = useState<"stats" | "messages">("messages")

  return (
    <aside className="hidden lg:flex flex-col w-96 bg-white rounded-lg border-4 border-purple-500 m-6 overflow-hidden shadow-lg">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex-1 py-4 text-center font-medium text-sm ${
            activeTab === "stats" ? "text-gray-900 border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex-1 py-4 text-center font-medium text-sm ${
            activeTab === "messages"
              ? "text-gray-900 border-b-2 border-purple-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Messages
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "messages" && (
          <div className="space-y-1 p-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 ${message.color} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                  >
                    {message.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{message.name}</p>
                    <p className="text-xs text-gray-500 truncate">{message.message}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "stats" && (
          <div className="p-6 text-center text-gray-500">
            <p className="text-sm">Stats content coming soon</p>
          </div>
        )}
      </div>
    </aside>
  )
}
