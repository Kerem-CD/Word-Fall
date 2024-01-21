from flask import Flask, send_file,render_template,request
import json
from addentry import addentry
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/interactives/<int:interactive_id>')
def interactives(interactive_id):
    return send_file('imgs/interactives/' + str(interactive_id) + '.png')
@app.route("/json/<string:jsonfile>")
def json(jsonfile):
    return send_file('json/' + jsonfile +".json")
@app.route("/icon.png")
def icon():
    return send_file('imgs/logo/Wordfall.png')
@app.route("/js/<string:jsfile>")
def js(jsfile):
    return send_file('js/' + jsfile)
@app.route("/styles/<string:style>")
def styles(style):
    return send_file('styles/' + style)
@app.route("/fonts/<string:fontname>")
def fonts(fontname):
    return send_file('fonts/' + fontname)
@app.route("/api/addentry", methods=['POST'])
def add():
    data = request.get_json()
    addentry(data['score'], data['time'], data['name'], data['activityId'], data['templateId'])
    return "OK"
app.run(host='0.0.0.0', port=8080, debug=True)