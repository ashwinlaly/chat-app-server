##Running MongoDB
mongod --port 27018 --dbpath /home/vijayabaskar/.mongo/data/ --replSet rs
mongo --port 27018

# Packages Used:

## Application Packages:
mongoDB       npm i mongodb
body-parser   npm i body-parser
cors          npm i cors
dotenv        npm i dotenv
socket.io     npm i socket.io

## Development Packages:
nodemon
PM2

### Uninstall MongoDB
sudo apt-get purge mongodb mongodb-clients mongodb-server mongodb-dev
sudo apt-get purge mongodb-10gen
sudo apt-get autoremove
sudo rm -r /var/lib/mongodb