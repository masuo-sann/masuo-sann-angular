export interface ApiResponse<T> {
    result: string,
    message: string,
    jobState: string,
    datastoreId: number,
    body: T,
}
