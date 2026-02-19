import { Globe, Zap, AlertCircle } from 'lucide-react';

const regions = [
  { id: 1, name: 'North America', x: '20%', y: '28%', load: 847, status: 'optimal', color: 'green' },
  { id: 2, name: 'South America', x: '28%', y: '58%', load: 234, status: 'optimal', color: 'green' },
  { id: 3, name: 'Europe', x: '48%', y: '25%', load: 612, status: 'optimal', color: 'green' },
  { id: 4, name: 'Africa', x: '52%', y: '50%', load: 156, status: 'warning', color: 'yellow' },
  { id: 5, name: 'Middle East', x: '58%', y: '35%', load: 289, status: 'optimal', color: 'green' },
  { id: 6, name: 'Asia', x: '72%', y: '32%', load: 1456, status: 'warning', color: 'yellow' },
  { id: 7, name: 'Oceania', x: '82%', y: '62%', load: 98, status: 'optimal', color: 'green' },
];

const connections = [
  { from: 1, to: 3 },
  { from: 3, to: 5 },
  { from: 5, to: 6 },
  { from: 3, to: 6 },
  { from: 6, to: 7 },
  { from: 2, to: 4 },
];

export function WorldMap() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Global Electricity Network</h3>
          <p className="text-sm text-gray-400 mt-1">Real-time grid status and electricity access</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-xs text-green-400 font-medium">5 Online</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
            <span className="text-xs text-yellow-400 font-medium">2 Warning</span>
          </div>
        </div>
      </div>
      
      {/* World Map Visualization */}
      <div className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-gray-700 rounded-xl p-8 h-[500px] overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Globe decoration */}
        <div className="absolute top-4 right-4 text-cyan-500/10">
          <Globe className="w-32 h-32" />
        </div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {connections.map((conn, index) => {
            const fromRegion = regions.find(r => r.id === conn.from);
            const toRegion = regions.find(r => r.id === conn.to);
            if (!fromRegion || !toRegion) return null;
            
            return (
              <line
                key={index}
                x1={fromRegion.x}
                y1={fromRegion.y}
                x2={toRegion.x}
                y2={toRegion.y}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            );
          })}
        </svg>
        
        {/* Region Markers */}
        {regions.map((region) => {
          const colorConfig = {
            green: {
              bg: 'bg-green-500/20',
              border: 'border-green-500',
              pulse: 'bg-green-400',
              text: 'text-green-400',
            },
            yellow: {
              bg: 'bg-yellow-500/20',
              border: 'border-yellow-500',
              pulse: 'bg-yellow-400',
              text: 'text-yellow-400',
            },
            red: {
              bg: 'bg-red-500/20',
              border: 'border-red-500',
              pulse: 'bg-red-400',
              text: 'text-red-400',
            },
          };
          
          const colors = colorConfig[region.color as keyof typeof colorConfig];
          
          return (
            <div
              key={region.id}
              className="absolute group cursor-pointer"
              style={{ left: region.x, top: region.y, transform: 'translate(-50%, -50%)' }}
            >
              {/* Pulse Effect */}
              <div className={`absolute inset-0 ${colors.pulse} rounded-full opacity-30 animate-ping`} style={{ width: '40px', height: '40px', left: '-12px', top: '-12px' }} />
              
              {/* Marker */}
              <div className={`relative w-4 h-4 ${colors.bg} border-2 ${colors.border} rounded-full shadow-lg z-10`}>
                <div className={`absolute inset-0 ${colors.pulse} rounded-full animate-pulse`} />
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                <div className={`${colors.bg} border ${colors.border} rounded-lg p-3 shadow-xl backdrop-blur-sm min-w-[180px]`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className={`w-4 h-4 ${colors.text}`} />
                    <span className="text-sm font-semibold text-gray-200">{region.name}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Load:</span>
                      <span className={`font-semibold ${colors.text}`}>{region.load} GW</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-semibold ${colors.text} capitalize`}>{region.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Legend */}
        <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-300 mb-3">Network Status</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-xs text-gray-400">Optimal</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-xs text-gray-400">Warning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-xs text-gray-400">Critical</span>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-3">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Total Coverage</p>
            <p className="text-lg font-bold text-cyan-400">89.2%</p>
          </div>
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Active Grids</p>
            <p className="text-lg font-bold text-green-400">247</p>
          </div>
        </div>
      </div>
    </div>
  );
}
