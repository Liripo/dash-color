import dash_color
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

color40 = ["rgba(178,34,34,255)" ,"rgba(244,164,96,255)" ,"rgba(254,212,57,255)" ,"rgba(145,209,194,255)" ,"rgba(121,175,151,255)" ,"rgba(0,160,135,255)" ,"rgba(77,187,213,255)" ,"rgba(59,73,146,204)" ,"rgba(60,84,136,255)" ,"rgba(137,104,205,255)" ,"rgba(205,150,205,255)" ,"rgba(176,156,133,255)" ,"rgba(205,140,149,255)" ,"rgba(253,140,193,255)" ,"rgba(234,203,133,255)" ,"rgba(255,246,143,255)" ,"rgba(162,205,90,255)" ,"rgba(110,139,61,255)" ,"rgba(32,178,170,255)" ,"rgba(108,166,205,255)" ,"rgba(58,95,205,255)" ,"rgba(146,94,159,255)" ,"rgba(125,38,205,255)" ,"rgba(139,71,93,255)" ,"rgba(0,139,69,204)" ,"rgba(99,24,121,204)" ,"rgba(0,130,128,204)" ,"rgba(187,0,33,204)" ,"rgba(95,85,155,204)" ,"rgba(162,0,86,204)" ,"rgba(128,129,128,204)" ,"rgba(27,25,25,204)" ,"rgba(255,111,0,255)" ,"rgba(199,16,0,255)" ,"rgba(0,142,160,255)" ,"rgba(138,65,152,255)" ,"rgba(90,149,153,255)" ,"rgba(255,99,72,255)" ,"rgba(132,215,225,255)" ,"rgba(247,182,210,204)"]

app.layout = html.Div([
    dash_color.DashColor(
        id='input',
        value='rgb(178,34,34)',
        width = "2em",
        disableAlpha = False,
        presetColors = color40
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('input', 'value'))
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True,port =5080)
