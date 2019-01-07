from flask import Blueprint, jsonify, request, render_template
import requests
users_blueprint = Blueprint('users', __name__, template_folder='./templates')


@users_blueprint.route('/users/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })


@users_blueprint.route('/', methods=['GET'])
def index():
    return render_template('index.html')

