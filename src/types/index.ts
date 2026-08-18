export type UserRole = 'manager' | 'driver' | 'technician' | 'officer' | null;

export type ReportIssue = 'full_bin' | 'overflow' | 'damaged' | 'missed_collection' | 'other';

export type ReportStatus = 'new' | 'assigned' | 'resolved';

export interface PublicReport {
  id: string;
  issue: ReportIssue;
  location: string;
  suburb: string;
  description: string;
  binId?: string;
  reporterName?: string;
  reporterEmail?: string;
  photoAttached: boolean;
  status: ReportStatus;
  createdAt: string;
  lat?: number;
  lng?: number;
}
