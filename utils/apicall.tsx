import { ShopList } from '@/utils/types';
import { IncomingMessage } from 'http';

export async function callApi(req: IncomingMessage, url: string): Promise<any> {
    // const baseUrl = process.env.BASE_URL || "http://localhost:3000"
    const baseUrl = process.env.BASE_URL
    // const host: string = req.headers.host ?? 'localhost';
    // const proto = /^localhost:?/.test(host) ? 'http' : 'https';
    const response = await fetch(`${baseUrl}${url}`);
    return await response.json();
}
