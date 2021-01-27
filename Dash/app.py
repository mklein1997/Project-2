import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd


salary_data = "/Users/Michael/Documents/GT DA/Project-2/BaseballData/Core/Salaries.csv"
# Read Purchasing File and store into Pandas data frame


salary_data_df = pd.read_csv(salary_data)



app = dash.Dash(__name__)

app.layout = html.Div(
    children=[
        html.H1(children="MLB Analytics",),
        html.P(
            children="Analyze the behavior of avocado prices"
            " and the number of avocados sold in the US"
            " between 2015 and 2018",
        ),
        dcc.Graph(
            figure={
                "data": [
                    {
                        "x": salary_data_df['yearid'],
                        "y": salary_data_df['salary'],
                        "type": "lines",
                    },
                ],
                "layout": {"title": "Player Salary Over Time"},
            }
        )
    ]
)
if __name__ == "__main__":
    app.run_server(debug=True)