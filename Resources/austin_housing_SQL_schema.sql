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
    year_2011 FLOAT NOT NULL,
    year_2012 FLOAT NOT NULL,
    year_2013 FLOAT NOT NULL,
    year_2014 FLOAT NOT NULL,
    year_2015 FLOAT NOT NULL,
    year_2016 FLOAT NOT NULL,
    year_2017 FLOAT NOT NULL,
    year_2018 FLOAT NOT NULL,
    year_2019 FLOAT NOT NULL,
    year_2020 FLOAT NOT NULL,
    year_2021 FLOAT NOT NULL,
    year_2022 FLOAT NOT NULL
);

SELECT * 
FROM annual_sales;

SELECT * 
FROM monthly_sales;

SELECT * 
FROM price_distribution;