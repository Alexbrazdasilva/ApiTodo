import { Router } from 'express'
import { router as Notes } from './Notes'
import { router as Users } from './Users'

const router = Router({mergeParams: true})

router.use(Notes)
router.use(Users)

export default router;
