const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export class Email {
  private constructor(private readonly value: string) {}

  static create(email: string) {
    if (!EMAIL_REGEX.test(email)) {
      throw new Error("INVALID EMAIL FORMAT");
    }
    return new Email(email.toLocaleLowerCase());
  }

  getValue(): string {
    return this.value;
  }
}
