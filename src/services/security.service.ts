import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt, { Secret } from 'jsonwebtoken'

if (!process.env.SECRET_KEY) {
  throw new Error('Secret key not defined')
}

const SECRET_KEY: Secret = process.env.SECRET_KEY

type JwtPayload = {
  id: number
}

export async function hashPassword(
  password: string,
  saltRounds = 10
): Promise<string> {
  return bcrypt.hash(password, saltRounds)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function createToken(
  payload: object,
  expiresIn = '8h'
): Promise<string> {
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn })
  return token
}

export async function verifyToken(token: string): Promise<JwtPayload> {
  const { id } = jwt.verify(token, SECRET_KEY) as JwtPayload
  return { id }
}
