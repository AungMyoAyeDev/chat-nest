import { Email } from "./value-object/email";
import { Password } from "./value-object/password";

export interface UserProps {
  id?: string;
  name: string;
  email: Email;
  password?: Password;
  updatedAt?: Date;
  createdAt?: Date;
}
export class User {
  private constructor(private user: UserProps) {}

  static create(props: UserProps): User {
    return new User({
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.createdAt || new Date(),
    });
  }

  get id(): string | undefined {
    return this.user.id;
  }
  get name(): string | undefined {
    return this.user.name;
  }
  get email(): Email | undefined {
    return this.user.email;
  }
  get password(): Password | undefined {
    return this.user.password;
  }

  toPrimitives() {
    return {
      id: this.id,
      name: this.name,
      email: this.email?.getValue(),
      password: this.password?.getValue(),
      updatedAt: this.user.updatedAt,
      createdAt: this.user.createdAt,
    };
  }
}
