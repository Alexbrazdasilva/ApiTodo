import { Router } from 'express'
import { router as Notes } from './Notes'

const router = Router({mergeParams: true})

router.use(Notes)

export default router;
