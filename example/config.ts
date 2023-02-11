import dotenv from 'dotenv'
import Logger from '../lib'

dotenv.config()

const accessKeyId = process.env.AWS_ACCESS_KEY_ID ?? ''
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ?? ''
const region = process.env.REGION ?? ''
const dynamodb = process.env.TABLE_NAME ?? ''

const logger = new Logger({ accessKeyId, secretAccessKey, region, dynamodb }, 'my-api')

export default logger
