"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
class Logger {
    constructor(credentials, application) {
        this.log = (data, type) => {
            const obj = Object.assign({ id: `${this.application.toUpperCase()}#${type.toUpperCase()}#${new Date().toISOString()}` }, (typeof data === 'object' ? Object.assign({}, data) : { data }));
            void Promise.resolve(this.dynamodb.send(new client_dynamodb_1.PutItemCommand({
                TableName: this.credentials.dynamodb,
                Item: (0, util_dynamodb_1.marshall)(obj)
            })));
        };
        this.info = (data) => { this.log(data, 'info'); };
        this.warn = (data) => { this.log(data, 'warn'); };
        this.error = (data) => { this.log(data, 'error'); };
        this.credentials = credentials;
        this.application = application;
        this.dynamodb = new client_dynamodb_1.DynamoDBClient({
            credentials: {
                accessKeyId: credentials.accessKeyId,
                secretAccessKey: credentials.secretAccessKey
            },
            region: credentials.region
        });
    }
}
exports.default = Logger;
