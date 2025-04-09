export interface Paginated<T> {
    content: T[];
    totalPages: number;
    totalItems: number;
    perPage: number;
    currentPage: number;
}
