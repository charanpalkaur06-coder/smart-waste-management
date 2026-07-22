import { MapPin } from 'lucide-react';
import { bins } from '../data/mockData';

export function MapPanel() {
  const critical = bins.filter((b) => b.status === 'critical' || b.status === 'warning');

  return (
    <div className="map-panel">
      <div className="map-grid" aria-hidden>
        {Array.from({ length: 48 }).map((_, i) => {
          const bin = bins[i % bins.length];
          const isHot = bin?.status === 'critical';
          const isWarn = bin?.status === 'warning';
          return (
            <span
              key={i}
              className={`map-dot ${isHot ? 'map-dot--critical' : isWarn ? 'map-dot--warning' : ''}`}
              style={{
                left: `${12 + (i * 17) % 76}%`,
                top: `${18 + (i * 23) % 64}%`,
              }}
            />
          );
        })}
      </div>
      <div className="map-overlay">
        <MapPin size={20} />
        <span>Canberra ACT — Live bin map</span>
        <p className="map-hint">Tap a red marker to view bin details · {critical.length} need attention</p>
      </div>
      <div className="map-legend">
        <span><i className="legend-dot legend-dot--critical" /> Critical</span>
        <span><i className="legend-dot legend-dot--warning" /> Warning</span>
        <span><i className="legend-dot legend-dot--normal" /> Normal</span>
      </div>
    </div>
  );
}
