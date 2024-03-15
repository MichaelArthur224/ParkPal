from flask import Flask, jsonify
import json

app = Flask(__name__)


@app.route("/parks")
def parks():
    with open('parkdata.json', 'r') as file:
        parks = json.load(file)
        return jsonify(parks)

if __name__ == '__main__':
    app.debug = True
    app.run()