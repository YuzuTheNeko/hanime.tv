export class HanimeError extends Error {
    constructor(error: string, ...params: unknown[]) {
        super(
            HanimeError.makeMessage(error, ...params)
        )
    }

    static makeMessage(error: string, ...params: unknown[]): string {
        params.map((p, i) => error = error.replaceAll(`$${i+1}`, p as string))
        return error
    }
}