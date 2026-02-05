import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const performanceData = [
  { time: '00:00', cpu: 45, memory: 62, network: 35 },
  { time: '04:00', cpu: 52, memory: 58, network: 42 },
  { time: '08:00', cpu: 78, memory: 71, network: 68 },
  { time: '12:00', cpu: 82, memory: 75, network: 75 },
  { time: '16:00', cpu: 65, memory: 68, network: 58 },
  { time: '20:00', cpu: 58, memory: 64, network: 48 },
  { time: '23:59', cpu: 48, memory: 60, network: 38 },
];

const requestData = [
  { name: 'Mon', requests: 4200 },
  { name: 'Tue', requests: 5300 },
  { name: 'Wed', requests: 4800 },
  { name: 'Thu', requests: 6100 },
  { name: 'Fri', requests: 5900 },
  { name: 'Sat', requests: 3200 },
  { name: 'Sun', requests: 2800 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-gray-300 text-xs mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.name === 'requests' ? '' : '%'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ChartsSection() {
  return (
    <div className="space-y-6">
      {/* Performance Chart */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">System Performance</h3>
            <p className="text-sm text-gray-400 mt-1">Real-time resource monitoring</p>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full" />
              <span className="text-gray-400">CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full" />
              <span className="text-gray-400">Memory</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full" />
              <span className="text-gray-400">Network</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNetwork" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="cpu" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" />
            <Area type="monotone" dataKey="memory" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorMemory)" />
            <Area type="monotone" dataKey="network" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorNetwork)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Request Volume Chart */}
      <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Request Volume</h3>
            <p className="text-sm text-gray-400 mt-1">Weekly API requests overview</p>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-xs text-green-400 font-medium">+15.3%</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={requestData}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="requests" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
