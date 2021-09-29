import { Request, Response } from 'express'

class Notes {
 private getAllNotes (req: Request, res: Response) {
    res.status(200).json({
      message: 'Verifique o console...'
    })
  }

 private getOneNote (req: Request, res: Response) {
    res.status(200).json({
      message: 'Aqui vai um exemplo de nota...'
    })
  }

  async handle (req: Request, res: Response) {
    const target = req.body.target
    switch (target) {
      case 'one-note':
        return this.getOneNote(req, res)
      default:
        return this.getAllNotes(req, res)
    }
  }
}

export const handle = new Notes().handle
