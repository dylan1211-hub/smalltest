-- Restaurants (static data)
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
-- lat, lon should be double precision, but some of them are missing value.
-- Try to insert NULL.

-- Convenience Stores (static data)
CREATE TABLE ConvenienceStore (
  fid SERIAL PRIMARY KEY,
  address_name CHAR(100),
  lat FLOAT,
  lon FLOAT,
  category CHAR(10)
);

-- Routes (static data)
CREATE TABLE allRoute(
  fid SERIAL PRIMARY KEY,
  RouteUID CHAR(100),
  RouteID CHAR(100),
  RouteName_zh CHAR(100),
  RouteName_en CHAR(100),
  HasSubRoutes BOOLEAN,
  RouteType INT,
  TicketPriceDescription_zh CHAR(100),
  TicketPriceDescription_en CHAR(100),
  DepartureStopName_zh CHAR(100),
  DepartureStopName_en CHAR(100),
  StartStop_zh CHAR(100),
  StartStop_en CHAR(100),
  EndStop_zh CHAR(100),
  EndStop_en CHAR(100),
  RouteURL CHAR(100),
  LiveBusURL CHAR(100),
  RouteImageURL CHAR(100),
  FareURL CHAR(100),
  RouteDistance INT
);

-- 