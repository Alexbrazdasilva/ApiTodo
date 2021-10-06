import { Router } from 'express'
import { LogRequest } from '@/middlewares/LogRequests'
import { default as Users } from '@/controllers/Users/User'

const router = Router()

router.post('/auth', LogRequest, Users.auth)
router.post('/register', LogRequest, Users.register)

export { router }
