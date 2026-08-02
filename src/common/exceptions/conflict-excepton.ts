export class ConflictException extends Error {
    public readonly code!: string;
    constructor(code: string, message: string) {
        super(message);
        this.name = 'Conflict';
        this.code = code;
    }
}