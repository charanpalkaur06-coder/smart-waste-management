import { bins, type Bin, type BinStatus } from '../data/mockData';

function statusBadge(status: BinStatus) {
  const map: Record<BinStatus, { label: string; class: string }> = {
    critical: { label: 'Critical', class: 'badge-critical' },
    warning: { label: 'Warning', class: 'badge-warning' },
    normal: { label: 'Normal', class: 'badge-normal' },
    offline: { label: 'Offline', class: 'badge-offline' },
  };
  const { label, class: cls } = map[status];
  return <span className={`badge ${cls}`}>{label}</span>;
}

function fillClass(status: BinStatus) {
  if (status === 'critical') return 'fill-critical';
  if (status === 'warning') return 'fill-warning';
  if (status === 'offline') return 'fill-offline';
  return 'fill-normal';
}

export function BinTable({ limit }: { limit?: number }) {
  const rows = limit ? bins.slice(0, limit) : bins;

  return (
    <div className="bin-table-wrap">
      <table className="bin-table">
        <thead>
          <tr>
            <th>Bin ID</th>
            <th>Location</th>
            <th>Type</th>
            <th>Fill level</th>
            <th>Status</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((bin: Bin) => (
            <tr key={bin.id}>
              <td className="bin-id">{bin.id}</td>
              <td>{bin.location}</td>
              <td>{bin.type}</td>
              <td>
                <div className="fill-cell">
                  <div className={`fill-bar ${fillClass(bin.status)}`}>
                    <div
                      className="fill-bar-inner"
                      style={{ width: `${bin.fill}%` }}
                    />
                  </div>
                  <span className="fill-pct">{bin.fill}%</span>
                </div>
              </td>
              <td>{statusBadge(bin.status)}</td>
              <td className="text-muted">{bin.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
