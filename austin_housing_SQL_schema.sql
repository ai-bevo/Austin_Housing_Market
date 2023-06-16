-- DROP TABLE IF EXISTS annual_sales
-- DROP TABLE IF EXISTS monthly_sales
-- DROP TABLE IF EXISTS price_distribution

CREATE TABLE annual_sales(
	id SERIAL PRIMARY KEY,
    year VARCHAR(50) NOT NULL,
	sales VARCHAR(50) NOT NULL,
    dollar_volume VARCHAR(50) NOT NULL,
    average_price VARCHAR(50) NOT NULL,
    median_price VARCHAR(50) NOT NULL,
    total_listings VARCHAR(50) NOT NULL,
    months_inventory VARCHAR(50) NOT NULL
);


CREATE TABLE monthly_sales(
    id SERIAL PRIMARY KEY,
    dates VARCHAR NOT NULL,
    sales VARCHAR(50) NOT NULL,
    dollar_volume VARCHAR(50) NOT NULL,
    average_price VARCHAR(50) NOT NULL,
    median_price VARCHAR(50) NOT NULL,
    total_listings VARCHAR(50) NOT NULL,
    months_inventory VARCHAR(50) NOT NULL
);

CREATE TABLE price_distribution(
	id SERIAL PRIMARY KEY,
    price_distribution VARCHAR(50) NOT NULL,
    "2011" VARCHAR(50) NOT NULL,
    "2012" VARCHAR(50) NOT NULL,
    "2013" VARCHAR(50) NOT NULL,
    "2014" VARCHAR(50) NOT NULL,
    "2015" VARCHAR(50) NOT NULL,
    "2016" VARCHAR(50) NOT NULL,
    "2017" VARCHAR(50) NOT NULL,
    "2018" VARCHAR(50) NOT NULL,
    "2019" VARCHAR(50) NOT NULL,
    "2020" VARCHAR(50) NOT NULL,
    "2021" VARCHAR(50) NOT NULL,
    "2022" VARCHAR(50) NOT NULL
);

SELECT * 
FROM annual_sales;

SELECT * 
FROM monthly_sales;

SELECT * 
FROM price_distribution;