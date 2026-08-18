-- Smart Waste Management System — Canberra
-- ICT308 Iteration 1 · MySQL / MariaDB schema

CREATE DATABASE IF NOT EXISTS smart_waste_canberra
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE smart_waste_canberra;

CREATE TABLE users (
  user_id       INT AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name     VARCHAR(120) NOT NULL,
  role          ENUM('manager', 'driver', 'technician', 'resident', 'officer') NOT NULL,
  is_active     TINYINT(1) DEFAULT 1,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bins (
  bin_id        VARCHAR(20) PRIMARY KEY,
  suburb        VARCHAR(80) NOT NULL,
  bin_type      ENUM('General', 'Recyclable', 'Organic') NOT NULL DEFAULT 'General',
  latitude      DECIMAL(10, 7),
  longitude     DECIMAL(10, 7),
  sensor_id     VARCHAR(20),
  fill_level    TINYINT UNSIGNED DEFAULT 0,
  status        ENUM('normal', 'warning', 'critical', 'offline') NOT NULL DEFAULT 'normal',
  last_reading  TIMESTAMP NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_bins_status (status),
  INDEX idx_bins_suburb (suburb)
);

CREATE TABLE sensor_readings (
  reading_id    INT AUTO_INCREMENT PRIMARY KEY,
  bin_id        VARCHAR(20) NOT NULL,
  fill_level    TINYINT UNSIGNED NOT NULL,
  recorded_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bin_id) REFERENCES bins(bin_id) ON DELETE CASCADE,
  INDEX idx_readings_bin (bin_id, recorded_at)
);

CREATE TABLE routes (
  route_id      INT AUTO_INCREMENT PRIMARY KEY,
  route_name    VARCHAR(120) NOT NULL,
  driver_id     INT,
  status        ENUM('planned', 'in_progress', 'completed') DEFAULT 'planned',
  estimated_mins INT,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (driver_id) REFERENCES users(user_id)
);

CREATE TABLE route_stops (
  stop_id       INT AUTO_INCREMENT PRIMARY KEY,
  route_id      INT NOT NULL,
  stop_order    INT NOT NULL,
  bin_id        VARCHAR(20) NOT NULL,
  status        ENUM('pending', 'collected', 'skipped') DEFAULT 'pending',
  collected_at  TIMESTAMP NULL,
  FOREIGN KEY (route_id) REFERENCES routes(route_id) ON DELETE CASCADE,
  FOREIGN KEY (bin_id) REFERENCES bins(bin_id),
  UNIQUE KEY uk_route_order (route_id, stop_order)
);

CREATE TABLE maintenance_tickets (
  ticket_id     VARCHAR(20) PRIMARY KEY,
  bin_id        VARCHAR(20) NOT NULL,
  title         VARCHAR(200) NOT NULL,
  description   TEXT,
  status        ENUM('open', 'in-progress', 'resolved') DEFAULT 'open',
  priority      ENUM('low', 'medium', 'high') DEFAULT 'medium',
  assigned_to   INT,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  resolved_at   TIMESTAMP NULL,
  FOREIGN KEY (bin_id) REFERENCES bins(bin_id),
  FOREIGN KEY (assigned_to) REFERENCES users(user_id),
  INDEX idx_tickets_status (status)
);

CREATE TABLE citizen_reports (
  report_id     VARCHAR(20) PRIMARY KEY,
  issue_type    ENUM('full_bin', 'overflow', 'damaged', 'missed_collection', 'other') NOT NULL,
  location_text VARCHAR(255) NOT NULL,
  suburb        VARCHAR(80) NOT NULL,
  bin_id        VARCHAR(20) NULL,
  photo_path    VARCHAR(255) NULL,
  status        ENUM('new', 'assigned', 'resolved') DEFAULT 'new',
  source        ENUM('Resident', 'Business', 'Public') DEFAULT 'Public',
  submitted_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bin_id) REFERENCES bins(bin_id),
  INDEX idx_reports_status (status)
);

CREATE TABLE bin_activity (
  activity_id   INT AUTO_INCREMENT PRIMARY KEY,
  bin_id        VARCHAR(20) NOT NULL,
  activity_type VARCHAR(80) NOT NULL,
  details       TEXT,
  logged_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bin_id) REFERENCES bins(bin_id) ON DELETE CASCADE
);
