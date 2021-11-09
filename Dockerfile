FROM node:14-alpine

RUN mkdir /app


WORKDIR /app


# install app dependencies
# COPY ["package.json", "package-lock.json*"] /app
COPY package.json /app

RUN npm install --silent
# RUN npm install react-scripts@4.0.3 

COPY . /app

EXPOSE 3000


# start app
CMD ["npm", "start"]
# RUN npm run build



