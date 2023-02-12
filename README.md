# Gamma Draconis

[![npm version](https://badge.fury.io/js/gamma-draconis.svg)](https://www.npmjs.com/package/gamma-draconis)

Gamma Draconis is a simple logger library based on [Single-Table Design](https://aws.amazon.com/pt/blogs/compute/creating-a-single-table-design-with-amazon-dynamodb/) and [DynamoDb](https://aws.amazon.com/dynamodb).

## Installing

Using NPM: 
```bash
npm install gamma-draconis --save
```
Or using Yarn:
```bash
yarn add gamma-draconis
```

## Getting Started

First of all you need to install the gamma draconis' dependency, go to [Installing](#Installing) section and see how to install. After that, you should to create a table on dynamodb, you can follow the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html) to figure it out. The table's `Partition Key` needs to be named as `id`.

Once we have done this, we can create and instance of Logger and use logging functions, as in the below example.

### Example

```ts
import Logger from 'gamma-logger'

const logger = new Logger(
  {
    accessKeyId: 'AWS_ACCESS_KEY',
    secretAccessKey: 'AWS_SECRET_ACCESS_KEY',
    region: 'REGION',
    dynamodb: 'DYNAMODB_TABLE_NAME'
  },
  'my-application'
)

logger.info({ description: 'Your data object here' })

// But you can use logger.warn and logger.error aswell
logger.warn({ description: 'Your warning log object here' })
logger.error({ description: 'Your error log object here' })
```

The output from example will be something like:

| id                                            | description                  |
|-----------------------------------------------|------------------------------|
| MY-APPLICATION#INFO#2023-02-12T00:00:00.000Z  | Your data object kere        |
| MY-APPLICATION#WARN#2023-02-12T00:00:00.000Z  | Your warning log object here |
| MY-APPLICATION#ERROR#2023-02-12T00:00:00.000Z | Your error log object here   |

Made with 💙 by [Gustavo Messagi](https://www.linkedin.com/in/gustavo-messagi-63470718b/)