import { Router } from 'express'
import { handle as Notes } from '@/controllers/Notes'
import { LogRequest } from '@/middlewares/LogRequests'

const router = Router()

router.post('/notes', LogRequest, Notes)

export { router };
