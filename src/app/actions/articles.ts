'use server'

import { baseBGApiUrl } from "./config"

export async function getArticles() {
    const res = await fetch(`${baseBGApiUrl}/Article/getAllArticles`, {cache: 'no-store', headers: {  'Content-Type': 'application/json'}},);
    
    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = res.json();
    return data;
}