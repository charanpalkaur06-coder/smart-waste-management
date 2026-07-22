import { Battery, Radio, Wrench } from 'lucide-react';
import { maintenanceIssues } from '../data/mockData';

const typeIcon: Record<string, typeof Wrench> = {
  LOW_BATTERY: Battery,
  OFFLINE: Radio,
  SENSOR_FAULT: Wrench,
};

export function MaintenanceView() {
  return (
    <>
      <div className="page-header">
        <h1>Maintenance</h1>
        <p>Sensor health, connectivity, and support tickets</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Open issues</h2>
          <span className="badge badge-warning">{maintenanceIssues.length} tickets</span>
        </div>
        <ul className="maintenance-list">
          {maintenanceIssues.map((issue) => {
            const Icon = typeIcon[issue.type] ?? Wrench;
            return (
              <li key={issue.id} className="maintenance-item">
                <div className="maintenance-icon">
                  <Icon size={18} />
                </div>
                <div className="maintenance-body">
                  <span className="maintenance-type">{issue.type.replace('_', ' ')}</span>
                  <strong>{issue.target}</strong>
                  <p>{issue.detail}</p>
                </div>
                <button type="button" className="btn btn-secondary">Resolve</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
