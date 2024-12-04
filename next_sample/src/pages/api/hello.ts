import { NextApiRequest, NextApiResponse } from "next";
interface HelloResponse {
    name: string
}

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    res.status(200).json({name: "John Doe"});
}


