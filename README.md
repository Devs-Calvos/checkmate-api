# Manage your employees with IdentWork

> ResFull API todo list.

---

## Technologies used

- Node.js + Typescript
- Express
- Typeorm
- Postgres

---

## Features

- CRUD operations to Task entitie.
- Validation of requested data

---

## Configuration

After clone repository, install the dependencies.

```
npm install
```

Create and configure .env file with this keys:

```
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=checkmate
PORT=3000

SECRET_KEY=supersecretkey
```

---

## Usage

To run this application just type in root directory:

```
npm run dev
```

expected in terminal:

```
Servidor escutando em http://localhost:3000
```

With docker:

```
// Up development server
docker-compose up -d
// Enter in api container
docker-compose exec api bash
// run migrations
npm run migration:run
```

---

## Documentation

### Schemas

### Task

```ts
type TaskRequest = {
  title: string
}
```

---

### Endpoints

#### Tasks

| Method | Endpoint           | Parameters | Body               | Description        |
| ------ | ------------------ | ---------- | ------------------ | ------------------ |
| GET    | tasks/             | -          | -                  | Get all tasks      |
| POST   | tasks/             | -          | TaskRequest Schema | Create a task      |
| PATCH  | tasks/\<id>/finish | task id    | -                  | Update task status |
| DELETE | tasks/\<id>        | task id    | -                  | Delete task        |

---

## Team

Web Application

- Developing by: https://github.com/rodrigopacheco100
- Link: https://github.com/Devs-Calvos/checkmate-web

Mobile Application

- Developing by: https://github.com/Fabriciomdec
- Link: https://github.com/Devs-Calvos/checkmate-app
