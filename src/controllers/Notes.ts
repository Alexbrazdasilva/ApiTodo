import { Request, Response} from 'express'

function Notes () {
  
  function getAllNotes(req: Request, res: Response) {
    res
      .status(200)
      .json({
        message: 'Verifique o console...'
      })
  }

  function getOneNote(req: Request, res: Response) {
    res
      .status(200)
      .json({
        message: `Aqui vai um exemplo de nota...`,
      })
  }

  async function handle (req: Request, res: Response) {
    const target = req.body.target
    switch (target) {
      case 'one-note':
        return getOneNote(req, res)
      default:
        return getAllNotes(req, res)     
    }

  }
  return { 
    handle
  }
}

export const handle = Notes().handle
