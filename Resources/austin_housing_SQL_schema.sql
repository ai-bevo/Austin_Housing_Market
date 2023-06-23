-- DROP TABLE IF EXISTS annual_sales
-- DROP TABLE IF EXISTS monthly_sales
-- DROP TABLE IF EXISTS price_distribution
-- DROP TABLE IF EXISTS austin_2021

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


CREATE TABLE austin_2021(
    id SERIAL PRIMARY KEY,
    zpid FLOAT NOT NULL,
    city VARCHAR(50) NOT NULL,
    streetAddress VARCHAR(50) NOT NULL,
    zipcode FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
	propertyTaxRate FLOAT NOT NULL,
	garageSpaces FLOAT NOT NULL,
	hasAssociation BOOLEAN NOT NULL,
	hasCooling BOOLEAN NOT NULL,
	hasGarage VARCHAR (50) NOT NULL,
	hasHeating VARCHAR (50) NOT NULL,
	hasSpa VARCHAR (50) NOT NULL,
	hasView VARCHAR (50) NOT NULL, 
	homeType VARCHAR (50) NOT NULL,
	parkingSpaces FLOAT NOT NULL,
	yearBuilt FLOAT NOT NULL,
	latestPrice FLOAT NOT NULL,
	numPriceChanges FLOAT NOT NULL,
	latest_saledate VARCHAR (50) NOT NULL,
	latest_salemonth FLOAT NOT NULL,
	latest_saleyear FLOAT NOT NULL,
	latestPriceSource TEXT NOT NULL,
	numOfPhotos FLOAT NOT NULL,
	numOfAccessibilityFeatures FLOAT NOT NULL,
	numOfAppliances FLOAT NOT NULL,
	numOfParkingFeatures FLOAT NOT NULL,
	numOfPatioAndPorchFeatures FLOAT NOT NULL,
	numOfSecurityFeatures FLOAT NOT NULL,
	numOfWaterfrontFeatures FLOAT NOT NULL,
	numOfWindowFeatures FLOAT NOT NULL,
	numOfCommunityFeatures FLOAT NOT NULL,
	lotSizeSqFt FLOAT NOT NULL,
	livingAreaSqFt FLOAT NOT NULL,
	numOfPrimarySchools FLOAT NOT NULL,
	numOfElementarySchools FLOAT NOT NULL,
	numOfMiddleSchools FLOAT NOT NULL,
	numOfHighSchools FLOAT NOT NULL,
	avgSchoolDistance FLOAT NOT NULL,
	avgSchoolRating FLOAT NOT NULL,
	avgSchoolSize FLOAT NOT NULL,
	MedianStudentsPerTeacher FLOAT NOT NULL,
	numOfBathrooms FLOAT NOT NULL,
	numOfBedrooms FLOAT NOT NULL,
	numOfStories FLOAT NOT NULL,
	homeImage TEXT NOT NULL
);
	
	
);

SELECT * 
FROM annual_sales;

SELECT * 
FROM monthly_sales;

SELECT * 
FROM price_distribution;

SELECT * 
FROM austin_2021;