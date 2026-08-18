USE smart_waste_canberra;

INSERT INTO users (email, password_hash, full_name, role) VALUES
  ('manager@act.gov.au', '$2y$10$demo', 'Krishna Trivedi', 'manager'),
  ('driver@act.gov.au', '$2y$10$demo', 'Alex Morgan', 'driver'),
  ('tech@act.gov.au', '$2y$10$demo', 'Jordan Taylor', 'technician'),
  ('officer@act.gov.au', '$2y$10$demo', 'Gov Officer', 'officer');

INSERT INTO bins (bin_id, suburb, bin_type, fill_level, status, last_reading, sensor_id) VALUES
  ('WDN-104', 'Weston Creek', 'General', 88, 'critical', NOW() - INTERVAL 2 MINUTE, 'SNS-104'),
  ('BEL-022', 'Belconnen', 'Recyclable', 84, 'warning', NOW() - INTERVAL 5 MINUTE, 'SNS-022'),
  ('CIV-016', 'Civic', 'General', 80, 'warning', NOW() - INTERVAL 8 MINUTE, 'SNS-016'),
  ('TUG-009', 'Tuggeranong', 'Organic', 42, 'normal', NOW() - INTERVAL 12 MINUTE, 'SNS-009'),
  ('GUN-015', 'Gungahlin', 'General', 0, 'offline', NOW() - INTERVAL 2 HOUR, 'SNS-015'),
  ('MAN-031', 'Manuka', 'Recyclable', 56, 'normal', NOW() - INTERVAL 15 MINUTE, 'SNS-031'),
  ('WOD-007', 'Woden', 'General', 71, 'warning', NOW() - INTERVAL 9 MINUTE, 'SNS-007'),
  ('FYS-012', 'Fyshwick', 'Organic', 34, 'normal', NOW() - INTERVAL 20 MINUTE, 'SNS-012');

INSERT INTO routes (route_id, route_name, driver_id, status, estimated_mins) VALUES
  (1, 'Route A — Weston & Belconnen', 2, 'in_progress', 135);

INSERT INTO route_stops (route_id, stop_order, bin_id, status) VALUES
  (1, 1, 'WDN-104', 'pending'),
  (1, 2, 'BEL-022', 'pending'),
  (1, 3, 'CIV-016', 'pending'),
  (1, 4, 'WOD-007', 'pending');

INSERT INTO maintenance_tickets (ticket_id, bin_id, title, status, priority) VALUES
  ('M-01', 'TUG-009', 'LOW_BATTERY — sensor at 12%', 'open', 'high'),
  ('M-02', 'GUN-015', 'OFFLINE — no heartbeat 2 hours', 'open', 'high'),
  ('M-03', 'WDN-104', 'SENSOR_FAULT — intermittent readings', 'in-progress', 'medium'),
  ('M-04', 'CIV-016', 'LID_DAMAGE — hinge replacement', 'in-progress', 'low'),
  ('M-05', 'BEL-022', 'COMPACTION motor fault resolved', 'resolved', 'high');

INSERT INTO citizen_reports (report_id, issue_type, location_text, suburb, status, source, submitted_at) VALUES
  ('PR-1088', 'full_bin', 'Lonsdale St', 'Braddon', 'new', 'Resident', NOW() - INTERVAL 3 HOUR),
  ('PR-1087', 'overflow', 'Garema Pl', 'Civic', 'assigned', 'Business', NOW() - INTERVAL 5 HOUR),
  ('PR-1086', 'missed_collection', 'Erindale Shops', 'Tuggeranong', 'resolved', 'Resident', NOW() - INTERVAL 1 DAY);
