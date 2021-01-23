import numpy as np
import pandas as pd
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from dotenv import load_dotenv
from flask import Flask, jsonify
import json

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
        f"/api/parks<br/>"
        f"/api/teams<br/>"
        f"/api/salaries<br/>"
        f"/api/batting<br/>"
        f"/api/college<br/>"
        f"/api/hof<br/>"
        f"/api/managers<br/>"
        f"/api/college_details<br/>"
        f"/api/players<br/>"
        f"/api/salhr_18<br/>"
        f"/api/teamcaps<br/>"
        f"/api/winpct"
    )

@app.route("/api/parks")
def parks():
    session = Session(engine)

    parks = pd.read_sql_query("SELECT * FROM parks", con)

    session.close()

    result = parks.to_json(orient="records")
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/teams")
def teams():
    session = Session(engine)

    teams = pd.read_sql_query("SELECT * FROM teams", con)

    session.close()

    result = teams.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/salaries")
def salaries():
    session = Session(engine)

    salaries = pd.read_sql_query("SELECT * FROM salaries", con)

    session.close()

    result = salaries.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/batting")
def batting():
    session = Session(engine)

    batting = pd.read_sql_query("SELECT * FROM batting", con)

    session.close()

    result = batting.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/college")
def college():
    session = Session(engine)

    college = pd.read_sql_query("SELECT * FROM college", con)

    session.close()

    result = college.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/hof")
def hof():
    session = Session(engine)

    hof = pd.read_sql_query("SELECT * FROM hof", con)

    session.close()

    result = hof.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/managers")
def managers():
    session = Session(engine)

    managers = pd.read_sql_query("SELECT * FROM managers", con)

    result = managers.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/college_details")
def college_details():
    session = Session(engine)

    college_details = pd.read_sql_query("SELECT * FROM college_details", con)

    result = college_details.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/players")
def players():
    session = Session(engine)

    players = pd.read_sql_query("SELECT * FROM players", con)
    
    result = players.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/salhr_18")
def salhr_18():
    session = Session(engine)

    salhr_18 = pd.read_sql_query("SELECT salaries.playerid, salaries.salary, batting.hr, batting.teamid FROM salaries JOIN batting ON salaries.playerid=batting.playerid WHERE batting.yearid = '2018'", con)

    result = salhr_18.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/teamcaps")
def teamcaps():
    session = Session(engine)

    team_cap18 = pd.read_sql_query("SELECT teamid, total_2018 FROM team_spending", con)

    result = team_cap18.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

@app.route("/api/winpct")
def winpct():
    session = Session(engine)

    team_wins = pd.read_sql_query("SELECT teamid, win_pct, total_2018 FROM team_spending", con)

    result = team_wins.to_json(orient='records')
    parsed = json.loads(result)
    return jsonify(parsed)

if __name__ == '__main__':
    app.run(debug=True)