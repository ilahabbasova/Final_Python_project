# app.py - Flask tətbiqi

from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Bu endpoint HTML səhifəsini qaytarır
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    # Backend-dən alınacaq məlumat
    data = {
        "name": "John Doe",
        "role": "Frontend Developer",
        "bio": "Experienced frontend developer specializing in JavaScript, React, and UI design."
    }
    return jsonify(data)

@app.route('/api/contact')
def get_contact_info():
    # Kontakt məlumatları
    contact_info = {
        "email": "example@example.com"
    }
    return jsonify(contact_info)

if __name__ == '__main__':
    app.run(debug=True)
