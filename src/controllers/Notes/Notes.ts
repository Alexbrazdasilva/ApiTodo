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
        : res.json({ message: 'Não há!', status: 200 }).status(200)
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
      res
        .json({
          message: 'Aqui vai um exemplo de nota...',
        })
        .status(200)
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
      return res
        .json({
          message: 'Nota criada com sucesso',
          status: 201,
        })
        .status(201)
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
  async deleteNote(req: Request, res: Response): Promise<Response | void> {
    try {
      res
        .json({
          message: 'Nota deletada',
        })
        .status(200)
    } catch (err) {
      console.error('Erro ao processar requisição:\n,', err)
    }
  }
}

export default new Notes()
