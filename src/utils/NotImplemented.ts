class NotImplemented {
  notImplemented():never {
    throw new Error('The function has not been implemented')
  }
}
export const notImplemented = new NotImplemented().notImplemented
