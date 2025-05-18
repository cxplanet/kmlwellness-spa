const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient();

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', // Or 'http://localhost:3000'
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'POST,OPTIONS'
    };

    // Handle preflight CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    const { email } = JSON.parse(event.body);
    const command = new PutItemCommand({
        TableName: process.env.EMAIL_SUBSCRIPTIONS_TABLE,
        Item: {
            email: { S: email },
            createdAt: { S: new Date().toISOString() },
            source: { S: 'quiz-signup' }
        }
    });

    try {
        await client.send(command);
        return {
            statusCode: 200,
            headers, // ✅ Include CORS headers here too
            body: JSON.stringify({ message: "Email saved" })
        };
    } catch (err) {
        console.error("Error saving to DynamoDB:", err);
        return {
            statusCode: 500,
            headers, // ✅ Include CORS headers here too
            body: JSON.stringify({ error: "Could not save email" })
        };
    }
};