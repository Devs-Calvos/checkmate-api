# Build the app image
FROM node:latest

# Create directory for the app user
RUN mkdir /api


# Create the home directory
ENV APP_HOME=/api
WORKDIR $APP_HOME

# install
COPY . .
RUN npm install

CMD ["npm", "run", "dev"]