import * as dotenv from 'dotenv'
import Logger from 'gamma-draconis'

dotenv.config()

const accessKeyId = process.env.AWS_ACCESS_KEY_ID ?? ''
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ?? ''
const region = process.env.REGION ?? ''
const dynamodb = process.env.TABLE_NAME ?? ''

const logger = new Logger(
  {
    accessKeyId,
    secretAccessKey,
    region,
    dynamodb
  },
  'my-application'
)

export default logger
