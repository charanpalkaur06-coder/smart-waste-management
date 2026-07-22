import { Recycle, Shield, Truck, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './LoginView.css';

interface LoginViewProps {
  onPublicReport: () => void;
  onManagerLogin?: () => void;
  onDriverLogin?: () => void;
}

export function LoginView({
  onPublicReport,
  onManagerLogin,
  onDriverLogin,
}: LoginViewProps) {
  const { login } = useApp();

  const signIn = (r: 'manager' | 'driver', name: string) => {
    login(r, name);
    if (r === 'manager') onManagerLogin?.();
    else onDriverLogin?.();
  };

  return (
    <div className="login-page">
      <div className="login-bg" aria-hidden />
      <div className="login-container">
        <div className="login-brand">
          <div className="login-logo">
            <Recycle size={32} strokeWidth={2.25} />
          </div>
          <h1>Canberra Smart Waste</h1>
          <p>TCCS Pilot · Territory & Municipal Services</p>
        </div>

        <div className="login-card">
          <h2>Sign in</h2>
          <p className="login-card-sub">Choose your role to access the operations portal</p>

          <div className="login-actions">
            <button
              type="button"
              className="login-btn login-btn--primary"
              onClick={() => signIn('manager', 'TCCS Manager')}
            >
              <Shield size={20} />
              Sign in — Manager
            </button>
            <button
              type="button"
              className="login-btn login-btn--secondary"
              onClick={() => signIn('driver', 'Route Driver')}
            >
              <Truck size={20} />
              Sign in — Driver
            </button>
          </div>

          <div className="login-divider">
            <span>or for everyone</span>
          </div>

          <button
            type="button"
            className="login-btn login-btn--public"
            onClick={onPublicReport}
          >
            <Users size={20} />
            Report a full bin
            <span className="login-btn-hint">No account required</span>
          </button>
        </div>

        <p className="login-footer">
          Public reports are sent to TCCS operations for review and routing.
        </p>
      </div>
    </div>
  );
}
