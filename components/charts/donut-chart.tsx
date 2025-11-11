export function DonutChart() {
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * 0.02

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="20" />
          {/* Success rate circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#86efac"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-green-500">98%</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8 w-full justify-center">
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900">1</p>
          <p className="text-xs text-gray-500">Unsuccessful</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-500">150</p>
          <p className="text-xs text-gray-500">Successful</p>
        </div>
      </div>
    </div>
  )
}
