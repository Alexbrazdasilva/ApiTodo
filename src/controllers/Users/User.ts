import 'dotenv/config'
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Users as EntityUsers } from '@/models/Users'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

class Users {
  /**
   * @description Authenticate user using email and password
   *
   * @param {Request} req
   * @param {Response} res
   * @memberof Users
   */
  async auth(req: Request, res: Response): Promise<Response | void> {
    try {
      const { email, password } = req.body
      const repositoryUsers = getRepository(EntityUsers)
      const user = await repositoryUsers.findOne({ where: { email } })

      if (!user) {
        return res.json({ message: 'Unauthorized authentication' }).status(401)
      }

      const isValidPass = compare(password, user.password)
      if (!isValidPass) {
        return res.json({ message: 'Unauthorized authentication' }).status(401)
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.SECRETKEY_TOKEN as string,
        { expiresIn: '1d' }
      )
      
      const { email: mail, name } = user
      
      return res.setHeader('Authorization-token', token).json({
        message: 'Authorized authentication',
        user: { id: req.userId, name, mail },
        token,
      })
    } catch (err) {
      console.error(err)
      res.json({ message: 'Authentication failed' })
    }
  }

  async register(req: Request, res: Response): Promise<Response | void> {
    try {
      const { name, email, password } = req.body
      const repositoryUsers = getRepository(EntityUsers)

      const userExists = await repositoryUsers.findOne({
        where: { email },
      })

      if (userExists) {
        return res.json({ message: 'Users exists', status: 409 }).status(409)
      }

      const registerUser = repositoryUsers.create({ email, password, name })
      await repositoryUsers.save(registerUser)

      return res.json({ user: registerUser }).status(200)
    } catch (err) {
      console.error(err)
    }
  }
}

export default new Users()
