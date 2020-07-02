# pull official base image
FROM node:14.5.0

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
RUN yarn install --silent

# add app
COPY . ./

# start app
CMD ["yarn", "start"]