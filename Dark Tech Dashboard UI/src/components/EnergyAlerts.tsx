import { AlertCircle, AlertTriangle, Info, CheckCircle, Clock, Zap } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'High Consumption Detected',
    message: 'Floor 3 Labs exceeding normal usage by 15%',
    time: '5 minutes ago',
    icon: Zap,
  },
  {
    id: 2,
    type: 'critical',
    title: 'Peak Demand Alert',
    message: 'Approaching maximum contracted capacity',
    time: '12 minutes ago',
    icon: AlertCircle,
  },
  {
    id: 3,
    type: 'info',
    title: 'Efficiency Improvement',
    message: 'HVAC system optimized, saving 8% energy',
    time: '1 hour ago',
    icon: CheckCircle,
  },
  {
    id: 4,
    type: 'warning',
    title: 'Maintenance Reminder',
    message: 'Solar panel cleaning scheduled tomorrow',
    time: '2 hours ago',
    icon: Clock,
  },
  {
    id: 5,
    type: 'info',
    title: 'Cost Saving Tip',
    message: 'Consider shifting loads to off-peak hours',
    time: '4 hours ago',
    icon: Info,
  },
];

const alertColors = {
  critical: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    icon: 'text-red-400',
  },
  warning: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    icon: 'text-yellow-400',
  },
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: 'text-blue-400',
  },
};

export function EnergyAlerts() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Energy Alerts & Notifications</h3>
          <p className="text-sm text-gray-400 mt-1">Recent system alerts and recommendations</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-xs text-yellow-400 font-medium">2 Warnings</span>
          </div>
          <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
            <span className="text-xs text-red-400 font-medium">1 Critical</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const colors = alertColors[alert.type as keyof typeof alertColors];
          
          return (
            <div
              key={alert.id}
              className={`${colors.bg} border ${colors.border} rounded-lg p-4 hover:bg-opacity-30 transition-all cursor-pointer`}
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-0.5 ${colors.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-200">{alert.title}</h4>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{alert.time}</span>
                  </div>
                  <p className="text-xs text-gray-400">{alert.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2.5 text-sm text-green-400 hover:text-green-300 font-medium border border-gray-800 hover:border-green-500/30 rounded-lg transition-colors hover:bg-green-500/5">
        View All Notifications
      </button>
    </div>
  );
}
