import { Router } from 'express'
import Notes from '@/controllers/Notes/Notes'
import { LogRequest } from '@/middlewares/LogRequests'
import { jwtCheck } from '@/middlewares/JwtCheck'

const router = Router()
router.post('/notes', jwtCheck, LogRequest, Notes.saveNote)
router.get('/notes', LogRequest, Notes.getAllNotes)
router.get('/notes/:id', LogRequest, Notes.getOneNote)
router.delete('/notes', jwtCheck, LogRequest, Notes.deleteNote)

export { router }
