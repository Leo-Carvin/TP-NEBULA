import { AlertCircle, AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'High CPU Usage',
    message: 'Server US-EAST-2 at 94%',
    time: '2 min ago',
    icon: AlertCircle,
  },
  {
    id: 2,
    type: 'warning',
    title: 'Memory Warning',
    message: 'Database cluster reaching limit',
    time: '12 min ago',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'info',
    title: 'Backup Complete',
    message: 'Daily backup finished successfully',
    time: '1 hour ago',
    icon: CheckCircle,
  },
  {
    id: 4,
    type: 'warning',
    title: 'SSL Certificate',
    message: 'Expiring in 7 days',
    time: '2 hours ago',
    icon: Clock,
  },
  {
    id: 5,
    type: 'info',
    title: 'System Update',
    message: 'New version available',
    time: '3 hours ago',
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

export function AlertPanel() {
  return (
    <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 shadow-xl h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Recent Alerts</h3>
          <p className="text-sm text-gray-400 mt-1">System notifications</p>
        </div>
        <div className="flex items-center space-x-1 px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded-full">
          <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          <span className="text-xs text-red-400 font-medium">3</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const colors = alertColors[alert.type as keyof typeof alertColors];
          
          return (
            <div
              key={alert.id}
              className={`${colors.bg} border ${colors.border} rounded-lg p-4 hover:bg-opacity-20 transition-all cursor-pointer`}
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-0.5 ${colors.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-sm font-semibold text-gray-200">{alert.title}</h4>
                    <span className="text-xs text-gray-500 ml-2">{alert.time}</span>
                  </div>
                  <p className="text-xs text-gray-400">{alert.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium border border-gray-800 hover:border-cyan-500/30 rounded-lg transition-colors">
        View All Alerts
      </button>
    </div>
  );
}
