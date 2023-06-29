
# install for connecting with postgresql
#pip install psycopg2-binary
import pandas as pd
import psycopg2 as pg
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker
from flask import Flask, jsonify, render_template
#from flask_cors import CORS
from config import pw

connection_string = f"postgres:{pw}@localhost:5432/Austin_Housing_Market"
engine = create_engine(f'postgresql://{connection_string}')


Base = automap_base()


Base.prepare(engine, reflect=True)

annual_sales = Base.classes.annual_sales
monthly_sales = Base.classes.monthly_sales
price_distribution = Base.classes.price_distribution
austin_21 = Base.classes.austin_2021

session = Session(engine)


# example query from annual sales table
session.query(annual_sales.median_price).all()


# flask setup

austin_housing_app = Flask(__name__)
#cors = CORS(austin_housing_app)
#cors = CORS(austin_housing_app, origins=["http://127.0.0.1:5000"])
#Check port number 5000 or 5500
#pip install flask-cors

@austin_housing_app.route("/")
def welcome():
    # List all available api routes.

    return render_template("index.html")
  
@austin_housing_app.route("/index2.html")
def welcome_again():
    # List all available api routes.
    return render_template("index2.html")
  
  
@austin_housing_app.route("/api/v1.0/annual_sales_table")
def annual_sales_data():
    # session link to annual sales table
    session = Session(engine)
    # query annual sales table
    results = session.query(annual_sales.year, annual_sales.sales, annual_sales.dollar_volume, 
                            annual_sales.average_price, annual_sales.median_price, 
                            annual_sales.total_listings, annual_sales.months_inventory).all()
    
    session.close()
    # create a dictionary from the row data and append to a list of annual sales
    annual_sales_data = []
    for year, sales, dollar_volume, average_price, median_price, total_listings, months_inventory in results:
        annual_sales_dict = {}
        annual_sales_dict["year"] = year
        annual_sales_dict["sales"] = sales
        annual_sales_dict["dollar_volume"] = dollar_volume
        annual_sales_dict["average_price"] = average_price
        annual_sales_dict["median_price"] = median_price
        annual_sales_dict["total_listings"] = total_listings
        annual_sales_dict["months_inventory"] = months_inventory
        annual_sales_data.append(annual_sales_dict)
        
    #return render_template('index.html', json_data = sales_data)
    return jsonify(annual_sales_data)

@austin_housing_app.route("/api/v1.0/monthly_sales_table")
def monthly_sales_data():
    session = Session(engine)
    
    results = session.query(monthly_sales.dates, monthly_sales.sales, monthly_sales.dollar_volume, monthly_sales.average_price, 
                            monthly_sales.median_price, monthly_sales.total_listings, monthly_sales.months_inventory).all()
    
    session.close()
    
    monthly_sales_data = []
    for dates, sales, dollar_volume, average_price, median_price, total_listings, months_inventory in results:
        monthly_sales_dict = {}
        monthly_sales_dict["dates"] = dates
        monthly_sales_dict["sales"] = sales 
        monthly_sales_dict["dollar_volume"] = dollar_volume
        monthly_sales_dict["average_price"] = average_price
        monthly_sales_dict["median_price"] = median_price
        monthly_sales_dict["total_listings"] = total_listings
        monthly_sales_dict["months_inventory"] = months_inventory
        monthly_sales_data.append(monthly_sales_dict)
    
    return jsonify(monthly_sales_data)


@austin_housing_app.route("/api/v1.0/price_distribution_table")
def price_distribution_data():
    session = Session(engine)
    
    results = session.query(price_distribution.price_distribution, price_distribution.year_2011, price_distribution.year_2012, price_distribution.year_2013,
                            price_distribution.year_2014, price_distribution.year_2015, price_distribution.year_2016, price_distribution.year_2017,
                            price_distribution.year_2018, price_distribution.year_2019, price_distribution.year_2020, price_distribution.year_2021,
                            price_distribution.year_2022).all()

    session.close()
    
    price_distribution_data = []
    for price_distribution_col, y2011, y2012, y2013, y2014, y2015, y2016, y2017, y2018, y2019, y2020, y2021, y2022 in results:
        price_distribution_dict = {}
        price_distribution_dict["price_distribution"] = price_distribution_col
        price_distribution_dict["2011"] = y2011
        price_distribution_dict["2012"] = y2012
        price_distribution_dict["2013"] = y2013
        price_distribution_dict["2014"] = y2014
        price_distribution_dict["2015"] = y2015
        price_distribution_dict["2016"] = y2016
        price_distribution_dict["2017"] = y2017
        price_distribution_dict["2018"] = y2018
        price_distribution_dict["2019"] = y2019
        price_distribution_dict["2020"] = y2020
        price_distribution_dict["2021"] = y2021
        price_distribution_dict["2022"] = y2022
        price_distribution_data.append(price_distribution_dict)
        
    return jsonify(price_distribution_data)
        

@austin_housing_app.route("/api/v1.0/austin_2021_home_sales")
def austin_2021_data():
    session = Session(engine)
    
    results = session.query(austin_21.id, austin_21.zpid, austin_21.city, austin_21.streetaddress, austin_21.zipcode, austin_21.latitude, austin_21.longitude,
                            austin_21.propertytaxrate, austin_21.yearbuilt, austin_21.lotsizesqft, austin_21.livingareasqft, austin_21.numofbedrooms, austin_21.numofbathrooms,
                            austin_21.hasspa, austin_21.latestprice).all()  
                            
    session.close()
    
    austin_2021_table = []
    for id, zpid, city, streetAddress, zipcode, latitude, longitude, propertyTaxRate, yearBuilt, lotSizeSqFt, livingAreaSqFt, numofBedrooms, numofBaths, hasSpa, latestPrice in results:
        austin_21_dict = {}
        austin_21_dict["id"] = id
        austin_21_dict["zpid"] = zpid
        austin_21_dict["city"] = city
        austin_21_dict["streetaddress"] = streetAddress
        austin_21_dict["zipcode"] = zipcode
        austin_21_dict["latitude"] = latitude
        austin_21_dict["longitude"] = longitude
        austin_21_dict["propertytaxrate"] = propertyTaxRate
        austin_21_dict["yearbuilt"] = yearBuilt
        austin_21_dict["lotsizesqft"] = lotSizeSqFt
        austin_21_dict["livingareasqft"] = livingAreaSqFt
        austin_21_dict["numbedrooms"] = numofBedrooms
        austin_21_dict["numbathsrooms"] = numofBaths
        austin_21_dict["hasspa"] = hasSpa
        austin_21_dict["latestprice"] = latestPrice
        austin_2021_table.append(austin_21_dict)
        
    return jsonify(austin_2021_table)


if __name__ == '__main__':
    austin_housing_app.run(debug=True)

            
    
    
            
    
    
