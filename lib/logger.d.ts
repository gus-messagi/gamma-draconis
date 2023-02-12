import { type LogType, type AWSCredentials, type ILogger } from './types';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
export default class Logger implements ILogger {
    credentials: AWSCredentials;
    dynamodb: DynamoDBClient;
    application: string;
    constructor(credentials: AWSCredentials, application: string);
    readonly log: (data: object | string, type: LogType) => void;
    info: (data: object | string) => void;
    warn: (data: object | string) => void;
    error: (data: object | string) => void;
}
