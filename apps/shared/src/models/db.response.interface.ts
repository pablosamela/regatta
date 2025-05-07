export interface DBResponse<T> {
    rows: T[];
    count: number;
}