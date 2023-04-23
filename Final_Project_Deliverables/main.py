from flask import Flask, render_template, request, jsonify
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import LinearSVC
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.ensemble import StackingClassifier
from xgboost import XGBClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
import form_data_transformation
import output_prediction

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    ss = request.form
    dd = form_data_transformation.transform(ss)
    output_prediction.load_pickle()
    result = output_prediction.outputfunc(dd)
    return jsonify({'pred1': result[0], 'pred2': result[1], 'pred3': result[2]})


if __name__ == '__main__':
    app.run(debug=True)