# Analyzing MLB Player Data in Recent Seasons

Using several components including Python, JS, SQL, Flask API, etc., import and clean datasets concerning MLB player statistics to present for analysis in a web-hosted dashboard.


From a database of MLB statistics provided by Sean Lahman (http://www.seanlahman.com/baseball-archive/statistics/), our team imported, filtered, and cleaned several CSV files containing different statistics concerning baseball team performance, player performance, spending, etc.

CSVs were cleaned using Python and Jupyter Notebook. Using Flask, SQL (Postgres), Python, and JavaScript, we were able to create several visualizations for display in a central console using an HTML template.

The HTML site is hosted on a local Python server from the user's machine. 

For the Flask API application, several tables from the downloaded datasets were created in pgAdmin. After creating a database and loading in the data from CSV files, a Flask application was created. Using SQLAlchemy, queries are run on the MLB database and saved as dataframes within the Flask app.

The Flask app then serves the queries divided into routes for each chart. Each API route is served as a JSON object using the Jsonify module.

Due to time constraints, the JSON object is then read using D3 and saved as a static file in the same directory as our Spending vs. Win Percentage chart. 
The chart is then displayed using Plotly in JS.

Data and Image Sources:
Baseball statistics dataset: http://www.seanlahman.com/baseball-archive/statistics/
MLB Salary Ranking Data: https://www.spotrac.com/mlb/rankings/2018/average/
Use of MLB logo: https://www.psdcovers.com/major-league-baseball-team-vector-logos-eps-svg-psd/
