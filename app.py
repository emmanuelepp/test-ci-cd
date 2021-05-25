from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return {"message": "Hello from travis and heroku CI/CD"}


if __name__ == "__main__":
    app.run()
