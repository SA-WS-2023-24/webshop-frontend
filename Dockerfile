# base image
FROM node:latest

# set working directory
WORKDIR workspace/app/

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . .

# Specify port
EXPOSE 3000

# start app
CMD ["npm", "start"]
