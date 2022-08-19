CREATE TABLE Restaurant(
  fid SERIAL PRIMARY KEY,
  id CHAR(5),
  store_name CHAR(110),
  open_time CHAR(500),
  district CHAR(5),
  address_name CHAR(120),
  lat CHAR(15),
  lon CHAR(15),
  category CHAR(130),
  consume CHAR(5)
);

-- lat, lon should be double precision

CREATE TABLE ConvenienceStore (
  fid SERIAL PRIMARY KEY,
  address_name CHAR(100),
  lat FLOAT,
  lon FLOAT,
  category CHAR(10)
);