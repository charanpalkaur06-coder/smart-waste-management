import type { NavId } from '../components/Sidebar';
import type { UserRole } from '../types';

export const ROLE_LABELS: Record<Exclude<UserRole, null>, string> = {
  manager: 'TCCS Operations Manager',
  driver: 'Collection Driver',
  technician: 'Maintenance Technician',
  officer: 'Government Officer',
};

export const ROLE_NAV: Record<Exclude<UserRole, null>, NavId[]> = {
  manager: [
    'dashboard',
    'map',
    'routes',
    'public-reports',
    'driver',
    'maintenance',
    'reports',
  ],
  driver: ['driver'],
  technician: ['maintenance', 'map'],
  officer: ['dashboard', 'reports'],
};

export function defaultNavForRole(role: Exclude<UserRole, null>): NavId {
  if (role === 'driver') return 'driver';
  if (role === 'technician') return 'maintenance';
  if (role === 'officer') return 'reports';
  return 'dashboard';
}
