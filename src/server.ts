import express from 'express'
import 'express-async-errors'
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import user from './routes/user'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.get('/', (req, res) => {
    res.json({ message: 'CheckMate' })
  })

  app.use('/users', user)

  app.use(errorMiddleware)
  return app.listen(process.env.PORT, () => {
    console.log(`Servidor escutando em http://localhost:${process.env.PORT}`)
  })
})
