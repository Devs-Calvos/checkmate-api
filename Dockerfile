# Build the app image
FROM node:18

# Create directory for the app user
RUN mkdir /api


# Create the home directory
ENV APP_HOME=/api
WORKDIR $APP_HOME

# install
COPY . .

CMD ["./docker-entrypoint.sh"]