import pickle
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import pandas as pd

clf = "ml-model"
le = "label-encoder"
vectorizer = "nlp-model"

def load_pickle():
  global clf
  global le
  global vectorizer
  with open('model.pickle', 'rb') as f:
      clf = pickle.load(f)
  with open('label_encode.pickle', 'rb') as f:
      le = pickle.load(f)
  with open('count_vec.pickle', 'rb') as f:
      vectorizer = pickle.load(f)


def preprocess_text(text):
  stop_words = set(stopwords.words('english'))
  lemmatizer = WordNetLemmatizer()
  text = text.lower()
  words = word_tokenize(text)
  words = [word for word in words if word not in stop_words]
  words = [lemmatizer.lemmatize(word) for word in words]
  text = ' '.join(words)
  return text

def string_to_dataframe(s):
    df = pd.DataFrame({'Job_Description': [s]})
    return df

def getmappings(le):
  d=dict(zip(le.classes_, le.transform(le.classes_)))
  revd=dict(zip(le.transform(le.classes_),le.classes_))
  return d, revd

def outputfunc(text):
  pretext=preprocess_text(text)
  dfin=string_to_dataframe(pretext)
  xval=vectorizer.transform(dfin['Job_Description'])
  y_pred = clf.predict_proba(xval)
  sorted_probs = (-y_pred).argsort()
  top_k=sorted_probs[0][:3]
  d,revd=getmappings(le)
  out=[]
  for i in top_k:
    out.append(revd[i])
  return out