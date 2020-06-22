from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/ee')
def ee():
    return render_template('ee.html')

#@app.route('/js/<path:path>')
#def send_js(path):
#    return send_from_directory('dist', path)