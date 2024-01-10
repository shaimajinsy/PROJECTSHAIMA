import pandas as pd
from sklearn.model_selection import train_test_split 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
import pickle

data=pd.read_csv('final_data.csv')

X_train, X_test, y_train, y_test = train_test_split(
    data['text'].values, data['label'].values, test_size= 0.2, random_state= 42)

vectorizer = TfidfVectorizer(
        
)

# Assigning variable to the vectorizer

train_vectors = vectorizer.fit_transform(
    X_train
)

#create and train a support vector classfier
svc_classifier=SVC()
svc_model=svc_classifier.fit(train_vectors,y_train)

pickle.dump(vectorizer,open('vectoriser.pkl','wb'))
pickle.dump(svc_classifier,open('svc_classifier.pkl','wb'))
