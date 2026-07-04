"""TN oracle — parameterized shell."""
from flask import Flask, request
import subprocess
import shlex
app = Flask(__name__)
@app.route("/run")
def run_cmd():
    q = request.args.get("q", "")
    subprocess.call(["grep", shlex.quote(q)])
