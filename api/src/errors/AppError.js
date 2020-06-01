class Error {
  constructor(message, status = 400) {
    this.message = message;
    this.status = status;
  }
}

export default Error;
