import { Wind, Thermometer, Lightbulb, MonitorPlay, AlertCircle } from 'lucide-react';

const devices = [
  {
    id: 1,
    name: 'HVAC System',
    zone: 'Floor 1-3',
    power: 347,
    status: 'optimal',
    icon: Wind,
    efficiency: 94,
  },
  {
    id: 2,
    name: 'Lighting Grid',
    zone: 'All Floors',
    power: 128,
    status: 'optimal',
    icon: Lightbulb,
    efficiency: 96,
  },
  {
    id: 3,
    name: 'Data Center',
    zone: 'Basement',
    power: 245,
    status: 'warning',
    icon: MonitorPlay,
    efficiency: 78,
  },
  {
    id: 4,
    name: 'Water Heating',
    zone: 'Utility Room',
    power: 89,
    status: 'optimal',
    icon: Thermometer,
    efficiency: 91,
  },
];

const statusConfig = {
  optimal: {
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    dot: 'bg-green-400',
  },
  warning: {
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    dot: 'bg-yellow-400',
  },
  critical: {
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    dot: 'bg-red-400',
  },
};

export function DeviceMonitoring() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Device Monitoring</h3>
          <p className="text-sm text-gray-400 mt-1">Real-time device status</p>
        </div>
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-green-400 font-medium">4 Active</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {devices.map((device) => {
          const Icon = device.icon;
          const status = statusConfig[device.status as keyof typeof statusConfig];
          
          return (
            <div
              key={device.id}
              className="p-4 bg-[#1e293b] border border-gray-700 rounded-lg hover:border-green-500/30 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-900/50 rounded-lg text-gray-400 group-hover:text-green-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200">{device.name}</h4>
                    <p className="text-xs text-gray-500">{device.zone}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-2 px-2.5 py-1 ${status.bg} border ${status.border} rounded-full`}>
                  <div className={`w-1.5 h-1.5 ${status.dot} rounded-full`} />
                  <span className={`text-xs font-medium ${status.color} capitalize`}>{device.status}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Power Draw</p>
                  <p className="text-lg font-bold text-green-400">{device.power} kW</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Efficiency</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${device.efficiency >= 90 ? 'bg-green-400' : 'bg-yellow-400'}`}
                        style={{ width: `${device.efficiency}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-300">{device.efficiency}%</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Total Power Summary */}
      <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
        <span className="text-sm text-gray-400">Total Device Power</span>
        <span className="text-lg font-bold text-green-400">809 kW</span>
      </div>
    </div>
  );
}
