import { useMemo, useState } from 'react';
import { Battery, Radio, Wrench } from 'lucide-react';
import { maintenanceIssues } from '../data/mockData';
import type { MaintenanceStatus } from '../data/mockData';
import './MaintenanceView.css';

const typeIcon: Record<string, typeof Wrench> = {
  LOW_BATTERY: Battery,
  OFFLINE: Radio,
  SENSOR_FAULT: Wrench,
  LID_DAMAGE: Wrench,
  COMPACTION: Wrench,
};

type FilterId = 'all' | MaintenanceStatus | 'high';

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'open', label: 'Open' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'resolved', label: 'Resolved' },
  { id: 'high', label: 'High priority' },
];

export function MaintenanceView() {
  const [filter, setFilter] = useState<FilterId>('all');

  const filtered = useMemo(() => {
    if (filter === 'high') {
      return maintenanceIssues.filter((t) => t.priority === 'high');
    }
    if (filter === 'all') return maintenanceIssues;
    return maintenanceIssues.filter((t) => t.status === filter);
  }, [filter]);

  return (
    <>
      <div className="page-header">
        <h1>Maintenance</h1>
        <p>Sensor health, connectivity, and support tickets</p>
      </div>

      <div className="maintenance-filters" role="tablist" aria-label="Filter tickets">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={`maintenance-filter ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Tickets</h2>
          <span className="badge badge-warning">{filtered.length} shown</span>
        </div>
        {filtered.length === 0 ? (
          <p className="maintenance-empty">No tickets match this filter.</p>
        ) : (
          <ul className="maintenance-list">
            {filtered.map((issue) => {
              const Icon = typeIcon[issue.type] ?? Wrench;
              return (
                <li key={issue.id} className="maintenance-item">
                  <div className="maintenance-icon">
                    <Icon size={18} />
                  </div>
                  <div className="maintenance-body">
                    <span className="maintenance-type">{issue.type.replace(/_/g, ' ')}</span>
                    <strong>{issue.target}</strong>
                    <p>{issue.detail}</p>
                    <span className={`maintenance-meta maintenance-meta--${issue.status}`}>
                      {issue.status.replace('-', ' ')} · {issue.priority} priority
                    </span>
                  </div>
                  {issue.status !== 'resolved' && (
                    <button type="button" className="btn btn-secondary">
                      Resolve
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
