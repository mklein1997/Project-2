CREATE TABLE batting (
	playerid VARCHAR,
	yearid INTEGER,
	stint INTEGER,
	teamid VARCHAR,
	leagueid VARCHAR,
	g INTEGER,
	ab INTEGER,
	r INTEGER,
	h INTEGER,
	second_base INTEGER,
	third_base INTEGER,
	hr INTEGER,
	rbi INTEGER,
	sb INTEGER,
	cs INTEGER,
	bb INTEGER,
	so INTEGER,
	ibb INTEGER,
	hbp INTEGER,
	sh INTEGER,
	sf INTEGER,
	gidp INTEGER
);

CREATE TABLE college (
	playerid VARCHAR,
	schoolid VARCHAR,
	yearid INTEGER
);

CREATE TABLE hof (
	playerid VARCHAR,
	yearid INTEGER,
	votedby VARCHAR,
	ballots INTEGER,
	needed INTEGER,
	votes INTEGER,
	inducted VARCHAR,
	category VARCHAR,
	needed_note VARCHAR
)

CREATE TABLE managers (
	playerid VARCHAR,
	yearid INTEGER,
	teamid VARCHAR,
	leagueid varchar,
	inseason INTEGER,
	games INTEGER,
	wins INTEGER,
	losses INTEGER,
	rank INTEGER,
	plyrmgr VARCHAR
)

CREATE TABLE college_details (
	schoolid VARCHAR,
	name VARCHAR,
	city VARCHAR,
	state varchar,
	country varchar
)

CREATE TABLE salaries (
	yearid INTEGER,
	teamid VARCHAR,
	leagueid VARCHAR,
	playerid VARCHAR,
	salary INTEGER
);

CREATE TABLE players (
	playerid VARCHAR,
	birthyear INTEGER,
	birthmonth INTEGER,
	day INTEGER,
	birthcountry VARCHAR,
	birthstate VARCHAR,
	birthcity VARCHAR,
	deathyear INTEGER,
	deathmonth INTEGER,
	deathday INTEGER,
	deathcountry VARCHAR,
	deathstate VARCHAR,
	deathcity VARCHAR,
	firstname VARCHAR,
	lastname VARCHAR,
	name VARCHAR,
	weight INTEGER,
	height INTEGER,
	bats VARCHAR,
	throws VARCHAR,
	debut DATE,
	finalgame DATE,
	retroid VARCHAR,
	bbrefid VARCHAR
);

CREATE TABLE team_spending (
	teamid TEXT,
	name TEXT,
	win_pct DOUBLE PRECISION,
	rostered INTEGER,
	payroll INTEGER,
	ir INTEGER,
	retained INTEGER,
	buried INTEGER,
	suspended INTEGER,
	total_2018 INTEGER
)

CREATE TABLE parks (
	parkid VARCHAR,
	park_name VARCHAR,
	city VARCHAR,
	park_state VARCHAR,
	start_date INTEGER,
	end_date INTEGER,
	league VARCHAR,
	aka VARCHAR,
	exact VARCHAR,
	latitude DOUBLE PRECISION,
	longitude DOUBLE PRECISION,
	altitude INTEGER
)

CREATE TABLE teams (
	yearid INTEGER,
	lgid VARCHAR,
	teamid VARCHAR,
	franchid VARCHAR,
	divid VARCHAR,
	rank INTEGER,
	wswin VARCHAR,
	name VARCHAR,
	park VARCHAR,
	attendance INTEGER,
	teamidbr VARCHAR
)