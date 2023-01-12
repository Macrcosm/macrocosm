import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
const url = process.env.NEXT_HUGGING_FACE_URL;
const nextHuggingFaceToken = process.env.NEXT_HUGGING_FACE_TOKEN;

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const response = await axios.post(`${url}`, {
            "inputs": req.body.prompt,
            "parameters": {
                "negatives": req.body.negatives,
                "use_cache": false,
                "wait_for_model": true
            }
        }, {headers: { "Authorization": `Bearer ${nextHuggingFaceToken}` }});
        res.status(200).json(response.data);
    } catch (e: any) {
        res.status(503).json(e.response.data);
    }
}
