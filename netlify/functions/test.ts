import { type Config, type Context } from "@netlify/functions";

export const config: Config = {
    path: "/api/test", // <------- NOTE THIS LINE
};

export default async function test(req: Request, context: Context): Promise<Response> {
    return new Response(
        JSON.stringify({
            test: "success",
        })
    );
}
