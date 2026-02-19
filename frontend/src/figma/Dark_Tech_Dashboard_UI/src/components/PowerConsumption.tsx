import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar } from 'lucide-react';

const hourlyData = [
  { time: '00:00', power: 420, target: 500 },
  { time: '02:00', power: 380, target: 500 },
  { time: '04:00', power: 350, target: 500 },
  { time: '06:00', power: 480, target: 500 },
  { time: '08:00', power: 850, target: 500 },
  { time: '10:00', power: 920, target: 500 },
  { time: '12:00', power: 1050, target: 500 },
  { time: '14:00', power: 980, target: 500 },
  { time: '16:00', power: 1120, target: 500 },
  { time: '18:00', power: 890, target: 500 },
  { time: '20:00', power: 720, target: 500 },
  { time: '22:00', power: 580, target: 500 },
  { time: '23:59', power: 470, target: 500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-gray-300 text-xs mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs font-medium" style={{ color: entry.color }}>
            {entry.name === 'power' ? 'Actual Power' : 'Target'}: {entry.value} kW
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function PowerConsumption() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Power Consumption Trend</h3>
          <p className="text-sm text-gray-400 mt-1">Real-time hourly power usage</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-[#1e293b] border border-gray-700 rounded-lg text-xs text-gray-300 hover:border-green-500/50 transition-colors">
            <Calendar className="w-3 h-3" />
            <span>Last 24 Hours</span>
          </button>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-gray-400">Actual</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border-2 border-dashed border-cyan-400 rounded-full" />
              <span className="text-gray-400">Target</span>
            </div>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={hourlyData}>
          <defs>
            <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis 
            dataKey="time" 
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
          />
          <YAxis 
            stroke="#64748b" 
            style={{ fontSize: '12px' }}
            tickLine={false}
            label={{ value: 'Power (kW)', angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: '12px' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="power" 
            stroke="#22c55e" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#powerGradient)" 
          />
          <Area 
            type="monotone" 
            dataKey="target" 
            stroke="#06b6d4" 
            strokeWidth={2}
            strokeDasharray="5 5"
            fillOpacity={0}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Power Status Indicators */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800">
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Current Load</p>
          <p className="text-xl font-bold text-green-400">847 kW</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Average Today</p>
          <p className="text-xl font-bold text-cyan-400">764 kW</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Peak Today</p>
          <p className="text-xl font-bold text-yellow-400">1,120 kW</p>
        </div>
      </div>
    </div>
  );
}
