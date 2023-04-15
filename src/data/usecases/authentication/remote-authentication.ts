import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import { InvalidCredentialsError } from '@/domain/errors/invalid-crendentials';

export class RemoteAuthetication {
  constructor(private readonly url: string, private readonly httpClient: HttpPostClient) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const response = await this.httpClient.post({
      url: this.url,
      body: params,
    });

    switch (response.statusCode) {
      case HttpStatusCode.UNATHORIZED:
        throw new InvalidCredentialsError();
    }
  }
}
