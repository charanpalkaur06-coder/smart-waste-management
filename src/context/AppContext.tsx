import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { addReport, loadReports, updateReportStatus } from '../lib/reportStore';
import { getExportMode, readSavedRole } from '../lib/routing';
import type { PublicReport, ReportIssue, UserRole } from '../types';

interface AppContextValue {
  role: UserRole;
  userName: string;
  reports: PublicReport[];
  newReportCount: number;
  login: (role: UserRole, name?: string) => void;
  logout: () => void;
  submitPublicReport: (
    data: Omit<PublicReport, 'id' | 'status' | 'createdAt'>
  ) => PublicReport;
  setReportStatus: (id: string, status: PublicReport['status']) => void;
  refreshReports: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function resolveInitialRole(): UserRole {
  const exportMode = getExportMode();

  if (exportMode === 'driver') return 'driver';
  if (exportMode === 'technician') return 'technician';
  if (exportMode === 'officer') return 'officer';
  if (
    exportMode === 'login' ||
    exportMode === 'public' ||
    exportMode === 'public-success'
  ) {
    return null;
  }
  if (exportMode) return 'manager';

  const saved = readSavedRole();
  if (saved) return saved;

  // Normal entry: open the desktop operations dashboard (not public/driver mobile flows).
  return 'manager';
}

export function AppProvider({ children }: { children: ReactNode }) {
  const exportMode = getExportMode();

  const [role, setRole] = useState<UserRole>(resolveInitialRole);
  const [userName, setUserName] = useState(() => {
    if (exportMode === 'driver') return 'Route Driver';
    if (exportMode?.startsWith('manager') || exportMode === 'dashboard') return 'TCCS Manager';
    const saved = sessionStorage.getItem('swm-name');
    if (saved) return saved;
    if (readSavedRole() === 'driver') return 'Route Driver';
    return 'TCCS Manager';
  });
  const [reports, setReports] = useState<PublicReport[]>(() => loadReports());

  useEffect(() => {
    if (!getExportMode() && role && !readSavedRole()) {
      sessionStorage.setItem('swm-role', role);
      sessionStorage.setItem('swm-name', userName);
    }
  }, [role, userName]);

  const refreshReports = useCallback(() => {
    setReports(loadReports());
  }, []);

  const login = useCallback((r: UserRole, name?: string) => {
    if (!r) return;
    setRole(r);
    const defaults: Record<Exclude<UserRole, null>, string> = {
      manager: 'TCCS Manager',
      driver: 'Route Driver',
      technician: 'Jordan Taylor',
      officer: 'Gov Officer',
    };
    const display = name ?? defaults[r];
    setUserName(display);
    sessionStorage.setItem('swm-role', r);
    sessionStorage.setItem('swm-name', display);
  }, []);

  const logout = useCallback(() => {
    setRole(null);
    sessionStorage.removeItem('swm-role');
    sessionStorage.removeItem('swm-name');
  }, []);

  const submitPublicReport = useCallback(
    (data: Omit<PublicReport, 'id' | 'status' | 'createdAt'>) => {
      const report = addReport(data);
      setReports(loadReports());
      return report;
    },
    []
  );

  const setReportStatus = useCallback((id: string, status: PublicReport['status']) => {
    updateReportStatus(id, status);
    setReports(loadReports());
  }, []);

  const newReportCount = useMemo(
    () => reports.filter((r) => r.status === 'new').length,
    [reports]
  );

  const value = useMemo(
    () => ({
      role,
      userName,
      reports,
      newReportCount,
      login,
      logout,
      submitPublicReport,
      setReportStatus,
      refreshReports,
    }),
    [
      role,
      userName,
      reports,
      newReportCount,
      login,
      logout,
      submitPublicReport,
      setReportStatus,
      refreshReports,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export const issueLabels: Record<ReportIssue, string> = {
  full_bin: 'Bin is full',
  overflow: 'Overflow / litter',
  damaged: 'Damaged bin',
  missed_collection: 'Missed collection',
  other: 'Other issue',
};
