export class WebResponse<T> {
    constructor(
        public statusCode: number,
        public data: T,
        public message: string,
    ) {}
}
