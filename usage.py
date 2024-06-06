import dash_pager
from dash import Dash, callback, html, Input, Output

import dash_bootstrap_components as dbc

external_stylesheets=[
    dbc.themes.BOOTSTRAP, dbc.icons.BOOTSTRAP
]

app = Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
#    dash_pager.Pager(),
    dash_pager.Pager(
        id='input',
        value=[1,10],
        maxValue=100,
#        symbols=['|<','<','>','>|']
        style={'border': '1px solid black'}
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('input', 'value'))
def display_output(value):
    print('Value Changed!', value)
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
