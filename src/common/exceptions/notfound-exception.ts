export class NotFoundException extends Error {
    public readonly code!: string;
    constructor(code: string, message: string) {
        super(message);
        this.name = 'Resource Not Found.';
        this.code = code;
    }
}