from app import app
from flaskext.mysql import MySQL

mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'SqlAdmin'
app.config['MYSQL_DATABASE_DB'] = 'musichackdev'
app.config['MYSQL_DATABASE_HOST'] = '192.168.0.108'
mysql.init_app(app)