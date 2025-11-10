import { ChevronDown } from "lucide-react"
import { BarChart } from "./charts/bar-chart"
import { DonutChart } from "./charts/donut-chart"
import { PaymentIssuesChart } from "./charts/payment-issues-chart"

export function MainContent() {
  return (
    <main className="flex-1 overflow-auto p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">👋</span>
          <h1 className="text-2xl font-semibold text-gray-900">Hey Martins!</h1>
        </div>
        <p className="text-xl text-gray-700">You earned NGN 3,000,000 this month.</p>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Earnings</h2>
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            Last 30 days
            <ChevronDown size={16} />
          </button>
        </div>
        <BarChart />
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Success rate</h2>
          <DonutChart />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment issues</h2>
          <PaymentIssuesChart />
        </div>
      </div>
    </main>
  )
}
