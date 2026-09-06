
export const responseHttp = (
    statusCode: number,
    code: string,
    ok: boolean,
    message: string,
    data: any
) =>{

    return {
        statusCode,
        code,
        ok,
        message,
        data
    }
}