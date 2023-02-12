import logger from './config'

export default class Product {
  logProduct = (): void => {
    logger.info({ name: 'Product Name', price: '10.00 USD' })
  }
}
