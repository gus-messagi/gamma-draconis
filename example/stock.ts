import logger from './config'

export default class Stock {
  logStock = (): void => {
    logger.info({ name: 'Product Name', amount: 100 })
  }
}
