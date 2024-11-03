import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const id = uuidv4();

export const handler = async (event) => {
  const body = JSON.parse(event.body);

  const command = new PutCommand({
    TableName: "demo",
    Item: {
      id: id,
      CommonName: body.CommonName,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

