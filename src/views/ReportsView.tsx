import { CollectionsChart, CompositionChart, VolumeChart } from '../components/Charts';
import { stats } from '../data/mockData';
import { compositionData } from '../data/mockData';

export function ReportsView() {
  return (
    <>
      <div className="page-header">
        <h1>Reports & KPIs</h1>
        <p>Operational metrics and waste composition analytics</p>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 560 }}>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--gray-600)' }}>Collections</span>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gray-950)' }}>{stats.collectionsToday}</div>
        </div>
        <div className="card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--gray-600)' }}>Distance saved</span>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green-900)' }}>{stats.distanceSavedKm} km</div>
        </div>
      </div>

      <div className="dashboard-grid-bottom" style={{ marginTop: '1.25rem' }}>
        <div className="card">
          <div className="card-header">
            <h2>Collections trend</h2>
          </div>
          <div className="card-body">
            <CollectionsChart />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>Waste volume (tonnes)</h2>
          </div>
          <div className="card-body">
            <VolumeChart />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.25rem' }}>
        <div className="card-header">
          <h2>Waste composition</h2>
        </div>
        <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <CompositionChart />
          <ul className="composition-legend">
            {compositionData.map((item) => (
              <li key={item.name}>
                <span style={{ background: item.color }} />
                {item.name} — {item.value}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
