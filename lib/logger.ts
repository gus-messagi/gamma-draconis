import { type LogType, type AWSCredentials, type ILogger } from './types'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { marshall } from '@aws-sdk/util-dynamodb'

export default class Logger implements ILogger {
  credentials: AWSCredentials
  dynamodb: DynamoDBClient
  application: string

  constructor (credentials: AWSCredentials, application: string) {
    this.credentials = credentials
    this.application = application

    this.dynamodb = new DynamoDBClient({
      credentials: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey
      },
      region: credentials.region
    })
  }

  readonly log = (data: object | string, type: LogType): void => {
    const obj = {
      id: `${this.application.toUpperCase()}#${type.toUpperCase()}#${new Date().toISOString()}`,
      ...(typeof data === 'object' ? { ...data } : { data })
    }

    void Promise.resolve(this.dynamodb.send(new PutItemCommand({
      TableName: this.credentials.dynamodb,
      Item: marshall(obj)
    })))
  }

  info = (data: object | string): void => { this.log(data, 'info') }
  warn = (data: object | string): void => { this.log(data, 'warn') }
  error = (data: object | string): void => { this.log(data, 'error') }
}
