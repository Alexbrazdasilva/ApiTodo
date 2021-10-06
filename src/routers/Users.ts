import { Router } from 'express'
import { LogRequest } from '@/middlewares/LogRequests'
import { jwtCheck } from '@/middlewares/JwtCheck'
import { default as Users } from '@/controllers/Users/User'

const router = Router()

router.post('/auth', jwtCheck, LogRequest, Users.auth)
router.post('/register', LogRequest, Users.register)

export { router }
