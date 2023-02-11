export declare interface AWSCredentials {
  accessKeyId: string
  secretAccessKey: string
  region: string
  dynamodb: string
}

export declare type LogType = 'info' | 'warn' | 'error'

export declare interface ILogger {
  credentials: AWSCredentials
  application: string
  service?: string

  readonly log: (data: object | string, type: LogType) => void

  info: (data: object | string) => void
}
