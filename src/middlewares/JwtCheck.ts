import { Response, Request, NextFunction } from 'express'

export async function jwtCheck(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
  const clientToken = req.headers['authorization-token']
  if(!clientToken) {
    return res.json({message: 'Unauthorized request', code: 401}).status(401)
  }
  next()
}
