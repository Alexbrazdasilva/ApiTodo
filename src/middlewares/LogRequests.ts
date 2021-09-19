import { Request, Response, NextFunction } from 'express'

function LogRequest(req: Request, res: Response, next: NextFunction):void {
  const date = new Date()
  console.log(`[${req.method}] ${req.path} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  next()
}

export { LogRequest };
