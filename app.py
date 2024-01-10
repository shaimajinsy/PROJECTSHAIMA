from flask import Flask,request,render_template#rendertemplate makes the html page
import pickle
from collections import Counter
app=Flask(__name__) #Initialize the flask App
svc_classifier=pickle.load(open('svc_classifier.pkl','rb'))#rb=read bites,we are loading the trained pickle file
vectoriser=pickle.load(open('vectoriser.pkl','rb'))


@app.route('/',methods=['GET','POST']) # route means main home pag
def home():
    if request.method=='POST':
        text_data=request.form['text_value'].lower()
        word =  Counter(text_data.split())        
        input_len = len(word)
        vectorised_text=vectoriser.transform([text_data])
        token_len = 0
        for i in word.keys():
            if i in vectoriser.vocabulary_:
                token_len += 1
        predicted_value=svc_classifier.predict(vectorised_text)
        return render_template('index.html',post_data=predicted_value[0],word = input_len, token = token_len)
    return render_template('index.html')

if __name__=='__main__':
    app.run(port=5000)
    
    
  
        
     