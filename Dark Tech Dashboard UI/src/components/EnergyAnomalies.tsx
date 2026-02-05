import { AlertCircle, AlertTriangle, Info, TrendingUp, TrendingDown, Zap, Activity } from 'lucide-react';

const anomalies = [
  {
    id: 1,
    type: 'critical',
    title: 'Demand Spike Detected',
    location: 'Asia-Pacific Grid',
    description: 'Unusual consumption increase of 18% in the last hour',
    value: '+18%',
    time: '3 minutes ago',
    icon: TrendingUp,
  },
  {
    id: 2,
    type: 'warning',
    title: 'Grid Frequency Deviation',
    location: 'European Network',
    description: 'Frequency dropped to 49.85 Hz, below normal range',
    value: '49.85 Hz',
    time: '12 minutes ago',
    icon: Activity,
  },
  {
    id: 3,
    type: 'critical',
    title: 'Load Imbalance',
    location: 'North American Grid',
    description: 'Uneven distribution detected across 3 substations',
    value: 'High',
    time: '15 minutes ago',
    icon: AlertCircle,
  },
  {
    id: 4,
    type: 'warning',
    title: 'Renewable Output Drop',
    location: 'Middle East Solar Farm',
    description: 'Solar generation 25% below forecast',
    value: '-25%',
    time: '28 minutes ago',
    icon: TrendingDown,
  },
  {
    id: 5,
    type: 'info',
    title: 'Scheduled Maintenance',
    location: 'African Grid Sector 4',
    description: 'Planned outage affecting 2% of regional capacity',
    value: '2%',
    time: '45 minutes ago',
    icon: Info,
  },
  {
    id: 6,
    type: 'warning',
    title: 'Peak Demand Alert',
    location: 'South American Network',
    description: 'Approaching maximum capacity threshold',
    value: '94%',
    time: '1 hour ago',
    icon: Zap,
  },
];

const alertConfig = {
  critical: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    icon: 'text-red-400',
    badge: 'bg-red-500',
  },
  warning: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    icon: 'text-yellow-400',
    badge: 'bg-yellow-500',
  },
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: 'text-blue-400',
    badge: 'bg-blue-500',
  },
};

export function EnergyAnomalies() {
  const criticalCount = anomalies.filter(a => a.type === 'critical').length;
  const warningCount = anomalies.filter(a => a.type === 'warning').length;

  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Energy Anomalies & Alerts</h3>
          <p className="text-sm text-gray-400 mt-1">Real-time grid anomaly detection</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-xs text-red-400 font-medium">{criticalCount} Critical</span>
          </div>
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-xs text-yellow-400 font-medium">{warningCount} Warning</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {anomalies.map((anomaly) => {
          const Icon = anomaly.icon;
          const config = alertConfig[anomaly.type as keyof typeof alertConfig];
          
          return (
            <div
              key={anomaly.id}
              className={`${config.bg} border ${config.border} rounded-lg p-4 hover:bg-opacity-30 transition-all cursor-pointer group`}
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-0.5 ${config.icon} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-200 mb-1">{anomaly.title}</h4>
                      <p className="text-xs text-gray-400 mb-1">{anomaly.location}</p>
                    </div>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{anomaly.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{anomaly.description}</p>
                  <div className="flex items-center justify-between">
                    <div className={`px-2.5 py-1 ${config.bg} border ${config.border} rounded-md`}>
                      <span className={`text-xs font-semibold ${config.text}`}>{anomaly.value}</span>
                    </div>
                    <button className={`text-xs ${config.text} hover:underline font-medium`}>
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-6 text-sm">
          <div>
            <span className="text-gray-400">Last Updated: </span>
            <span className="text-gray-200 font-medium">Just now</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-400">Live monitoring active</span>
          </div>
        </div>
        <button className="px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium border border-gray-800 hover:border-cyan-500/30 rounded-lg transition-colors hover:bg-cyan-500/5">
          View All Alerts
        </button>
      </div>
    </div>
  );
}
