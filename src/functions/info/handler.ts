import type {ValidatedEventAPIGatewayProxyEvent} from '@libs/api-gateway';
import {formatJSONResponse} from '@libs/api-gateway';
import {middyfy} from '@libs/lambda';
import dotenv from 'dotenv';
dotenv.config();

import schema from './schema';

const info: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
    return formatJSONResponse({
        message: `serverless function test`,
    });
};

export const main = middyfy(info);
