export function PaymentIssuesChart() {
  const issues = [
    { type: 'Customer errors', count: 1,  colorHex: '#f7b267', letter: 'a' },
    { type: 'Fraud blocks',    count: 5,  colorHex: '#f7d079', letter: 'x' },
    { type: 'Bank errors',     count: 3,  colorHex: '#f26d6d', letter: 'o' },
    { type: 'System errors',   count: 10, colorHex: '#7fd3dd', letter: 'n' },
  ];

  const totalErrors = issues.reduce((sum, i) => sum + i.count, 0);
  const maxCount    = Math.max(...issues.map(i => i.count));

  return (
    <div className="w-full max-w-sm mx-auto">

      {/* ---------- bars ---------- */}
      <div className="flex items-end justify-between h-40 gap-4 mb-4 px-2">
        {issues.map((ig) => (
          // make each column take the full height of the chart container
          <div key={ig.type} className="flex-1 flex flex-col items-center gap-2 h-full">
            {/* bar */}
            <div className="relative w-full h-full flex items-end">
              <div
                className="w-full"
                style={{
                  height: `${(ig.count / maxCount) * 100}%`,
                  backgroundColor: ig.colorHex,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700">
                {ig.count}
              </span>
            </div>
            {/* letter below bar */}
            <span className="text-xs text-gray-500">{ig.letter}</span>
          </div>
        ))}
      </div>

      {/* ---------- legend ---------- */}
      <div>
        <p className="text-sm font-semibold text-amber-600 mb-2">
          Total number of errors: <span className="font-bold">{totalErrors}</span>
        </p>
        <div className="space-y-1">
          {issues.map((ig) => (
            <div key={ig.type} className="flex items-center gap-2">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                style={{ backgroundColor: ig.colorHex }}
              >
                {ig.letter}
              </span>
              <span className="text-xs text-gray-600">{ig.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}