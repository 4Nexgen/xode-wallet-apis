// Schema for getting NFTs
export const balanceOf = {
    summary: 'Get ASTRO balance of the account',
    tags: ['Astro Economy Token'],
    description: 'Schema for getting ASTRO balance of the account.',
    // Request body schema
    params: {
        type: 'object',
        properties: {
            account: { type: 'string' }
        },
        required: [
            'account'
        ],
    },
    // Response schema for success
    response: {
        200: {
            description: 'Success response after getting balance.',
            type: 'object',
            properties: {
                balance: { type: 'string' },
                symbol: { type: 'string' },
                name: { type: 'string' },
                price: { type: 'string' },
            },
        },
        // Response schema for unspecified code
        default: {
            description: 'Default response',
            type: 'object',
            properties: {
                status: { type: 'number' },
                message: { type: 'string' },
            },
        }
    },
    security: [
        {
          "apiKey": []
        }
    ]
};