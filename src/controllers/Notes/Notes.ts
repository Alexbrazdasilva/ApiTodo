import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Notes as EntityNotes } from '@/models/Notes'

class Notes {
  /**
   *
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<void>}
   * @memberof Notes
   */
  async getAllNotes(req: Request, res: Response): Promise<Response | void> {
    try {
      const repositoryNotes = getRepository(EntityNotes)
      const notes = await repositoryNotes.find()

      return notes
        ? res.json({ notes, status: 200 }).status(200)
        : res.json({ message: 'There are no notes', status: 204 }).status(204)
    } catch (err) {
      console.error('Erro no processamento da requisição:\n', err)
    }
  }

  /**
   *
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<Response|void>}
   * @memberof Notes
   */
  async getOneNote(req: Request, res: Response): Promise<Response | void> {
    try {
      const { id } = req.params

      const repositoryNotes = getRepository(EntityNotes)
      const note = await repositoryNotes.findOne({ where: { id } })

      return note
        ? res.json({ note, status: 200 }).status(200)
        : res.json({ message: 'There are no note', status: 204 }).status(204)
    } catch (err) {
      console.error('Erro ao processar requisição:\n', err)
    }
  }

  /**
   *
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<Response|void>}
   * @memberof Notes
   */
  async saveNote(req: Request, res: Response): Promise<Response | void> {
    try {
      const { title, note, tag, author } = req.body
      const repositoryNotes = getRepository(EntityNotes)
      const notes = await repositoryNotes.insert({
        author,
        note,
        title,
        tag,
      })

      return notes
        ? res
            .json({ message: 'The note was saved successfully', status: 201 })
            .status(201)
        : res
            .json({
              message: 'There was an error trying to save the note',
              status: 401,
            })
            .status(401)
    } catch (err) {
      console.error('Erro ao processar requisição:\n', err)
      res
        .json({
          message: 'An error occurred while trying to process your request',
          status: 400,
        })
        .status(400)
    }
  }

  /**
   *
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<Response|void>}
   * @memberof Notes
   */
  async deleteNote(req: Request, res: Response): Promise<Response | void> {
    try {
      const { id } = req.body
      const repositoryNotes = getRepository(EntityNotes)
      const notes = await repositoryNotes.delete({ id })
      
      return !notes.raw.length !== true && notes.affected === 1
      ? res
        .json({
          message: 'Deleted',
        })
        .status(201)
      : res.json({
        message: 'Erro ao tentar deletar nota',
        status: 400
      })
      .status(400)
    } catch (err) {
      console.error('Erro ao processar requisição:\n,', err)
    }
  }
}

export default new Notes()
