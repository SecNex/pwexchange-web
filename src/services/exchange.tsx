'use server';

const storeApi = process.env.STORE_API;
const storeApiSecret = process.env.STORE_API_CLIENT_SECRET;

export type Secret = {
    secret: string;
};

export const StoreSecret = async (props: Secret) => {
    console.log('storeApi', storeApi);
    const reqUrl = `${storeApi}/api/store/encrypt`;
    const reqBody = JSON.stringify(
        {
            password: props.secret,
        }
    );
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storeApiSecret}`,
        },
        body: reqBody,
    };
    const response = await fetch(reqUrl, reqOptions);
    // Check if the response is ok
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export type Decrypt = {
    id: string;
    secretKey: string;
};

export const GetSecret = async (props: Decrypt) => {
    const reqUrl = `${storeApi}/api/store/decrypt?id=${props.id}`;
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storeApiSecret}`,
        },
        body: JSON.stringify({
            secret: props.secretKey,
        }),
    };
    const response = await fetch(reqUrl, reqOptions);
    // Check if the response is ok
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}