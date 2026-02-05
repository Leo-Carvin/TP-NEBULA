import { DollarSign, TrendingDown, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const costData = [
  { day: 'Mon', cost: 2450 },
  { day: 'Tue', cost: 2680 },
  { day: 'Wed', cost: 2320 },
  { day: 'Thu', cost: 2890 },
  { day: 'Fri', cost: 2750 },
  { day: 'Sat', cost: 1980 },
  { day: 'Sun', cost: 1640 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-gray-300 text-xs mb-1">{label}</p>
        <p className="text-sm font-semibold text-yellow-400">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export function CostAnalysis() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Cost Analysis</h3>
          <p className="text-sm text-gray-400 mt-1">Weekly spending</p>
        </div>
        <div className="p-2 bg-yellow-500/10 rounded-lg">
          <DollarSign className="w-5 h-5 text-yellow-400" />
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={costData}>
          <defs>
            <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eab308" stopOpacity={1} />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            dataKey="day" 
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
          />
          <YAxis 
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="cost" fill="url(#costGradient)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Cost Summary */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/20 rounded-lg">
          <div>
            <p className="text-xs text-gray-400 mb-1">This Week Total</p>
            <p className="text-xl font-bold text-yellow-400">$16,710</p>
          </div>
          <div className="flex items-center space-x-1 text-sm text-green-400">
            <TrendingDown className="w-4 h-4" />
            <span className="font-medium">-8.3%</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Projected Monthly</span>
            <span className="font-semibold text-gray-200">$68,450</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Average Daily Cost</span>
            <span className="font-semibold text-gray-200">$2,387</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Cost per kWh</span>
            <span className="font-semibold text-gray-200">$0.13</span>
          </div>
        </div>
      </div>
    </div>
  );
}
