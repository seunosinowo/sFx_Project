export function BarChart() {
  const data = [
    { period: 'Mar 1 - 7', value: 50000 },
    { period: 'Mar 8 - 14', value: 125000 },
    { period: 'Mar 15 - 21', value: 115000 },
    { period: 'Mar 22 - 28', value: 120000 },
    { period: 'Final wk', value: 190000 },
  ]

  const maxValue = 200000

  return (
    <div className="w-full">
      {/* Chart header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">Earnings</h1>
        <p className="text-sm text-gray-500">Last 30 days</p>
      </div>

      {/* Chart area with gridlines and y-axis labels */}
      <div className="relative h-40 md:h-56">
        {/* Horizontal grid lines */}
        <div className="absolute inset-0">
          {[0, 0.25, 0.5, 0.75, 1].map((pos, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t"
              style={{ 
                top: `${(1 - pos) * 100}%`, 
                borderColor: '#ededed'
              }}
            />
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-16 flex flex-col justify-between py-2">
          {[200000, 150000, 100000, 50000, 0].map((label) => (
            <span key={label} className="text-[10px] md:text-xs text-gray-500">
              {label.toLocaleString()}
            </span>
          ))}
        </div>

        {/* Bars - FIXED: Remove top padding and ensure bars reach bottom */}
        <div className="absolute inset-0 ml-12 md:ml-16 mr-2 flex items-end justify-between px-2">
          {data.map((item) => (
            <div key={item.period} className="flex-1 flex flex-col items-center h-full justify-end">
              <div
                className="w-8 md:w-12 rounded-t-xl"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: '#E9D5FF',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="mt-3 ml-12 md:ml-16 mr-2 flex justify-between text-[10px] md:text-xs text-gray-600">
        {data.map((item) => (
          <span key={item.period} className="w-8 md:w-12 text-center">
            {item.period}
          </span>
        ))}
      </div>
    </div>
  )
}