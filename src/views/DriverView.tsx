import { Check, LogOut } from 'lucide-react';

interface DriverViewProps {
  onLogout?: () => void;
}

export function DriverView({ onLogout }: DriverViewProps) {
  return (
  <>
    <div className="page-header">
      <h1>Driver — Route R-1042</h1>
      <p>Active collection run · Next stop highlighted</p>
    </div>

    <div className="driver-card card">
      <div className="driver-next">
        <span className="driver-label">Next stop</span>
        <h2>BEL-022</h2>
        <p>Stop #2 of 4 · Belconnen — Cohen St · 84% full</p>
      </div>
      <button type="button" className="btn btn-primary driver-action">
        <Check size={20} />
        Mark Collected
      </button>
      <div className="driver-queue">
        <span>Upcoming: CIV-016 → WOD-007</span>
      </div>
      <button type="button" className="btn btn-ghost driver-logout" onClick={onLogout}>
        <LogOut size={16} />
        Logout
      </button>
    </div>
  </>
  );
}
