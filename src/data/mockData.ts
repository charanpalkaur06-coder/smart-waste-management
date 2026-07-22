export type BinStatus = 'normal' | 'warning' | 'critical' | 'offline';

export interface Bin {
  id: string;
  location: string;
  fill: number;
  type: 'General' | 'Recyclable' | 'Organic';
  status: BinStatus;
  lastUpdated: string;
}

export interface Alert {
  id: string;
  binId: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
  time: string;
}

export const stats = {
  totalBins: 48,
  activeAlerts: 7,
  avgFillPercent: 58,
  collectionsToday: 124,
  wasteCollectedTons: 5.2,
  distanceSavedKm: 142,
  activeVehicles: 6,
  routeProgress: 68,
};

export const bins: Bin[] = [
  { id: 'WDN-104', location: 'Weston Creek — Park St', fill: 88, type: 'General', status: 'critical', lastUpdated: '2 min ago' },
  { id: 'BEL-022', location: 'Belconnen — Cohen St', fill: 84, type: 'Recyclable', status: 'warning', lastUpdated: '5 min ago' },
  { id: 'CIV-016', location: 'Civic — London Cct', fill: 80, type: 'General', status: 'warning', lastUpdated: '8 min ago' },
  { id: 'TUG-009', location: 'Tuggeranong — Anketell St', fill: 42, type: 'Organic', status: 'normal', lastUpdated: '12 min ago' },
  { id: 'GUN-015', location: 'Gungahlin — Hibberson St', fill: 0, type: 'General', status: 'offline', lastUpdated: '2 hr ago' },
  { id: 'MAN-031', location: 'Manuka — Furneaux St', fill: 56, type: 'Recyclable', status: 'normal', lastUpdated: '15 min ago' },
  { id: 'WOD-007', location: 'Woden — Bowes St', fill: 71, type: 'General', status: 'warning', lastUpdated: '9 min ago' },
  { id: 'FYS-012', location: 'Fyshwick — Barrier St', fill: 34, type: 'Organic', status: 'normal', lastUpdated: '20 min ago' },
];

export const alerts: Alert[] = [
  { id: 'A-001', binId: 'WDN-104', message: 'FULL_BIN alert — capacity at 88%', severity: 'high', time: '2 min ago' },
  { id: 'A-002', binId: 'BEL-022', message: 'Approaching capacity threshold (84%)', severity: 'medium', time: '5 min ago' },
  { id: 'A-003', binId: 'GUN-015', message: 'Sensor OFFLINE — no telemetry', severity: 'high', time: '2 hr ago' },
  { id: 'A-004', binId: 'TUG-009', message: 'LOW_BATTERY on sensor module', severity: 'medium', time: '45 min ago' },
  { id: 'A-005', binId: 'CIV-016', message: 'Scheduled collection overdue', severity: 'medium', time: '1 hr ago' },
];

export const routeStops = [
  { order: 1, binId: 'WDN-104', fill: 88, location: 'Weston Creek' },
  { order: 2, binId: 'BEL-022', fill: 84, location: 'Belconnen' },
  { order: 3, binId: 'CIV-016', fill: 80, location: 'Civic' },
  { order: 4, binId: 'WOD-007', fill: 71, location: 'Woden' },
];

export const maintenanceIssues = [
  { id: 'M-01', type: 'LOW_BATTERY', target: 'TUG-009', detail: 'Sensor battery at 12%' },
  { id: 'M-02', type: 'OFFLINE', target: 'GUN-015', detail: 'No heartbeat for 2 hours' },
  { id: 'M-03', type: 'SENSOR_FAULT', target: 'WDN-104', detail: '1 sensor → multiple tickets' },
];

export const chartData = [
  { day: 'Mon', collections: 18, volume: 2.1 },
  { day: 'Tue', collections: 22, volume: 2.4 },
  { day: 'Wed', collections: 19, volume: 2.0 },
  { day: 'Thu', collections: 24, volume: 2.8 },
  { day: 'Fri', collections: 21, volume: 2.3 },
  { day: 'Sat', collections: 12, volume: 1.2 },
  { day: 'Sun', collections: 8, volume: 0.9 },
];

export const compositionData = [
  { name: 'General', value: 42, color: '#0d5c4b' },
  { name: 'Recyclable', value: 31, color: '#14b8a6' },
  { name: 'Organic', value: 27, color: '#6ee7b7' },
];
