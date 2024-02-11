import { UsecaseError } from "./usecase-error";

export class EmptyRowsException extends UsecaseError {
  constructor(message: string) {
    super(message);
  }
}
