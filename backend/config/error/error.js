class BaseError extends Error {
  constructor(message, statusCode=500, errorCode='INTERNAL_ERROR') {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
} 

export class ValidationError extends BaseError {
  constructor(message='Validation Error') {
    super(message, 400, 'VALIDATION_ERROR');
  }
}

export class AuthenticationError extends BaseError {
  constructor(message='Authentication Failed') {
    super(message, 401, 'AUTHENTICATION_ERROR');
  }
}

export class NotFoundError extends BaseError {
  constructor(message='Not Found') {
    super(message, 404, 'ERROR_NOT_FOUND');
  }
}

export class ConflictingResponse extends BaseError {
  constructor(message='Conflicting Response') {
    super(message, 409, 'CONFLICTING_RESPONSE');
  }
}

export class GatewayError extends BaseError {
  constructor(message = 'Payment Gateway Error') {
    super(message, 502, 'GATEWAY_ERROR');
  }
}

export class ServiceUnavailable extends BaseError {
  constructor(message = 'Service Temporarily Unavailable') {
    super(message, 503, 'SERVICE_UNAVAILABLE');
  }
}


