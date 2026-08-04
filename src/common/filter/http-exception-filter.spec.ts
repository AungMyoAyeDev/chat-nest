import { ArgumentsHost, BadRequestException, HttpStatus } from "@nestjs/common";
import { HttpExceptionFilter } from "./http-exception-filter";

describe("HttpExceptionFilter", () => {
  it("preserves extra payload fields such as details for validation errors", () => {
    const filter = new HttpExceptionFilter();
    const json = jest.fn();
    const status = jest.fn().mockReturnValue({ json });
    const req = { method: "POST", url: "/users" };
    const res = { status } as any;
    const host = {
      switchToHttp: () => ({
        getResponse: () => res,
        getRequest: () => req,
      }),
    } as ArgumentsHost;

    const exception = new BadRequestException({
      success: false,
      message: "Validation failed.",
      code: "INVALID_INPUT",
      details: { email: ["email is required"] },
    });

    filter.catch(exception, host);

    expect(status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        code: "INVALID_INPUT",
        message: "Validation failed.",
        details: { email: ["email is required"] },
      }),
    );
  });
});
