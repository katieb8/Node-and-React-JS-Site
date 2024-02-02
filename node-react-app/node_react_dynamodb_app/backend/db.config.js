import AWS from 'aws-sdk'

AWS.config.updare({
    region: "eu-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'nodejs_react_project'

export {
    db,
    Table
}