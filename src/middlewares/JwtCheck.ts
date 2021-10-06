import { Response, Request, NextFunction } from 'express'
import { IPayloadToken } from '@/types/DataJwt'
import jwt from 'jsonwebtoken'

export async function jwtCheck(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {

  if(!req.headers) {
    return res.json({ message: 'Unauthorized request', code: 401 }).status(401)
  }

  const clientToken = req.headers['authorization-token'] as string
  if (!clientToken) {
    return res.json({ message: 'Unauthorized request', code: 401 }).status(401)
  }

  try {
    const data = jwt.verify(clientToken, process.env.SECRETKEY_TOKEN as string)
    const { id } = data as IPayloadToken

    req.userId = id

  } catch {
    return res.json({ message: 'Unauthorized request', code: 401 }).status(401)
  }

  next()
}
