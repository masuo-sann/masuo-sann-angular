export interface ApiResponse<T> {
    result: string,
    message: string,
    job_state: string,
    datastore_id: number,
    body: T,
}
