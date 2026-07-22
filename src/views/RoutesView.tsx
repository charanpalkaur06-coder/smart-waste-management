import { CheckCircle2, Route } from 'lucide-react';
import { routeStops } from '../data/mockData';

export function RoutesView() {
  return (
    <>
      <div className="page-header">
        <h1>Route Optimisation</h1>
        <p>Collection task order — optimised for minimum travel distance</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h2>Route R-1042 — Collection order</h2>
            <button type="button" className="btn btn-primary">
              <CheckCircle2 size={16} />
              Approve + Assign Driver
            </button>
          </div>
          <div className="card-body">
            <ol className="route-list">
              {routeStops.map((stop) => (
                <li key={stop.binId} className="route-stop">
                  <span className="route-order">{stop.order}</span>
                  <div className="route-stop-body">
                    <strong>{stop.binId}</strong>
                    <span>{stop.location}</span>
                  </div>
                  <span className={`route-fill ${stop.fill >= 85 ? 'route-fill--high' : ''}`}>
                    {stop.fill}%
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2>Route summary</h2>
          </div>
          <div className="card-body route-summary">
            <div className="route-summary-stat">
              <Route size={24} />
              <div>
                <span className="route-summary-value">4 stops</span>
                <span className="route-summary-label">Estimated duration 2h 15m</span>
              </div>
            </div>
            <div className="route-summary-stat">
              <span className="route-summary-value">142 km saved</span>
              <span className="route-summary-label">vs manual routing this month</span>
            </div>
            <p className="route-note">
              Priority: WDN-104 (88%) → BEL-022 (84%) → CIV-016 (80%) → WOD-007 (71%)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
