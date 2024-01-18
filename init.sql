CREATE DATABASE create_pallet_application_development;
CREATE USER <%= ENV.fetch('POSTGRES_USER') %> WITH password <%= ENV.fetch('POSTGRES_PASSWORD') %>;
GRANT ALL privileges ON DATABASE create_pallet_application_development TO <%= ENV.fetch('POSTGRES_USER') %>;