import { Router } from 'express'
import Notes from '@/controllers/Notes/Notes'
import { LogRequest } from '@/middlewares/LogRequests'

const router = Router()
router.post('/notes', LogRequest, Notes.saveNote)
router.get('/notes', LogRequest, Notes.getAllNotes)
router.get('/notes/:id', LogRequest, Notes.getOneNote)
router.delete('/notes', LogRequest, Notes.deleteNote)

export { router }
