import numpy as np
import pandas as pd
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from dotenv import load_dotenv
from flask import Flask, jsonify

# Database init
db_name = 'MLB_db'
engine = create_engine(f'postgresql://postgres:Michaelflyer1@localhost:5433/{db_name}')
con = engine

# Create variables for tables
parks = pd.read_sql_query("SELECT * FROM parks", con)
teams = pd.read_sql_query("SELECT * FROM teams", con)
salaries = pd.read_sql_query("SELECT * FROM salaries", con)
batting = pd.read_sql_query("SELECT * FROM batting", con)
college = pd.read_sql_query("SELECT * FROM college", con)
hof = pd.read_sql_query("SELECT * FROM hof", con)
managers = pd.read_sql_query("SELECT * FROM managers", con)
college_details = pd.read_sql_query("SELECT * FROM college_details", con)
players = pd.read_sql_query("SELECT * FROM players", con)

salhr_18 = pd.read_sql_query("SELECT salaries.playerid, salaries.salary, batting.hr, batting.teamid FROM salaries JOIN batting ON salaries.playerid=batting.playerid WHERE batting.yearid = '2018'", con)
team_cap18 = pd.read_sql_query("SELECT teamid, total_2018 FROM team_spending", con)
team_wins = pd.read_sql_query("SELECT teamid, win_pct, total_2018 FROM team_spending", con)


# Flask setup
app = Flask(__name__)

# Flask Routing
@app.route("/")
def home():
    return (
        f"Available Routes: <br/>"
        f"/api/parks"
        f"/api/teams"
        f"/api/salaries"
        f"/api/batting"
        f"/api/college"
        f"/api/hof"
        f"/api/managers"
        f"/api/college_details"
        f"/api/players"
    )