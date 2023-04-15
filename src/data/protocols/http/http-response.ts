export enum HttpStatusCode {
  SUCCESS = 200,
  UNATHORIZED = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: unknown;
};
