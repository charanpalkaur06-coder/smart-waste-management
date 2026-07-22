import { AlertTriangle, Battery, WifiOff } from 'lucide-react';
import { alerts } from '../data/mockData';

const severityIcon = {
  high: AlertTriangle,
  medium: Battery,
  low: WifiOff,
};

export function AlertsList({ limit = 5 }: { limit?: number }) {
  const items = alerts.slice(0, limit);

  return (
    <ul className="alerts-list">
      {items.map((alert) => {
        const Icon = severityIcon[alert.severity];
        return (
          <li key={alert.id} className={`alert-item alert-item--${alert.severity}`}>
            <div className="alert-icon">
              <Icon size={16} />
            </div>
            <div className="alert-body">
              <span className="alert-bin">{alert.binId}</span>
              <p className="alert-msg">{alert.message}</p>
              <span className="alert-time">{alert.time}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
