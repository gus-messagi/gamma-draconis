import * as express from 'express'
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
  'express-application'
)

const app = express()

app.get('/', (_, res) => {
  logger.info({ description: 'Express server' })
  res.status(200).send('OK')
})

app.listen(3333)