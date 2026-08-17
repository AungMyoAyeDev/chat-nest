import { DomainException } from "src/common/exceptions/domain-exception";
import * as bcrypt from "bcrypt";
export class Password {
  private constructor(private readonly value: string) {}
  static create(password: string) {
    if (!password || password.length === 0) {
      throw new DomainException("INVALID PASSWORD", "Password cannot be empty");
    }
    if (password.length < 8) {
      throw new DomainException(
        "INVALID PASSWORD",
        "Password must contain 8 characters. ",
      );
    }
    if (password.length > 125) {
      throw new DomainException(
        "INVALID PASSWORD",
        "Password cannot be exceed 125 characters. ",
      );
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowerercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!hasUppercase || !hasLowerercase || !hasNumber) {
      throw new DomainException(
        "INVALID PASSWORD",
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      );
    }

    return new Password(password);
  }

  static fromHashed(hashedpassword: string): Password {
    return new Password(hashedpassword);
  }
  async hash(): Promise<string> {
    return await bcrypt.hash(this.value, 10);
  }

  async compare(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.value);
  }

  getValue() {
    return this.value;
  }
}
