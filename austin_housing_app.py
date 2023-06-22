
# install for connecting with postgresql
# pip install psycopg2-binary
import pandas as pd
import psycopg2 as pg
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy.orm import sessionmaker
from flask import Flask, jsonify, render_template
from flask_cors import CORS
from config import pw

connection_string = f"postgres:{pw}@localhost:5432/Austin_Housing_Market"
engine = create_engine(f'postgresql://{connection_string}')


Base = automap_base()


Base.prepare(engine, reflect=True)

annual_sales = Base.classes.annual_sales
monthly_sales = Base.classes.monthly_sales
price_distribution = Base.classes.price_distribution

session = Session(engine)


# example query from annual sales table
session.query(annual_sales.median_price).all()


# flask setup

austin_housing_app = Flask(__name__)
cors = CORS(austin_housing_app)
cors = CORS(austin_housing_app, origins=["http://127.0.0.1:5000"])
#Check port number 5000 or 5500
#pip install flask-cors

@austin_housing_app.route("/")
def welcome():
    # List all available api routes.

    return render_template("index.html")
    #return(
    #    f"Available Routes:<br/>"
    #    f"/api/v1.0/annual_sales_table<br/>"
    #    f"/api/v1.0/monthly_sales_table<br/>"
    #    f"/api/v1.0/price_distribution_table<br/>"
    #

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
        

if __name__ == '__main__':
    austin_housing_app.run(debug=True)

            
    
    
