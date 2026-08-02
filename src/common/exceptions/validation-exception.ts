export class ValidationException extends Error {
    public readonly code!: string;
    constructor(code: string, message: string) {
        super(message);
        this.name = 'ValidationException';
        this.code = code;
    }
}