import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const countryData = [
  { country: 'China', consumption: 7842, population: 1444, perCapita: 5.4 },
  { country: 'USA', consumption: 4056, population: 331, perCapita: 12.3 },
  { country: 'India', consumption: 1562, population: 1393, perCapita: 1.1 },
  { country: 'Russia', consumption: 1088, population: 144, perCapita: 7.6 },
  { country: 'Japan', consumption: 936, population: 125, perCapita: 7.5 },
  { country: 'Germany', consumption: 536, population: 83, perCapita: 6.5 },
  { country: 'Canada', consumption: 552, population: 38, perCapita: 14.5 },
  { country: 'Brazil', consumption: 527, population: 213, perCapita: 2.5 },
  { country: 'S. Korea', consumption: 559, population: 52, perCapita: 10.8 },
  { country: 'France', consumption: 449, population: 67, perCapita: 6.7 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl">
        <p className="text-sm font-semibold text-gray-200 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-xs text-cyan-400">
            Total: <span className="font-bold">{data.consumption} TWh</span>
          </p>
          <p className="text-xs text-purple-400">
            Per Capita: <span className="font-bold">{data.perCapita} MWh</span>
          </p>
          <p className="text-xs text-gray-400">
            Population: <span className="font-medium">{data.population}M</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function CountryConsumption() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Country-wise Electricity Consumption</h3>
          <p className="text-sm text-gray-400 mt-1">Annual consumption by nation (TWh)</p>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <TrendingUp className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-cyan-400 font-medium">2024 Data</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={countryData} layout="vertical">
          <defs>
            <linearGradient id="consumptionGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
          <XAxis 
            type="number"
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
          />
          <YAxis 
            dataKey="country"
            type="category"
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293b' }} />
          <Bar 
            dataKey="consumption" 
            fill="url(#consumptionGradient)" 
            radius={[0, 8, 8, 0]}
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800">
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Total (Top 10)</p>
          <p className="text-lg font-bold text-cyan-400">18,107 TWh</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Avg Per Capita</p>
          <p className="text-lg font-bold text-purple-400">7.2 MWh</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Growth Rate</p>
          <p className="text-lg font-bold text-green-400">+3.4%</p>
        </div>
      </div>
    </div>
  );
}
