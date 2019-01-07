from flask import Blueprint, jsonify, request
from sqlalchemy import exc, or_
import requests

auth_blueprint = Blueprint('auth', __name__)


