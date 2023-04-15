import { AuthenticationParams } from '@/domain/usecases/authentication';
import { HttpPostClient } from '@/data/protocols/http/http-post-client';

export class RemoteAuthetication {
  constructor(private readonly url: string, private readonly httpClient: HttpPostClient) {}

  async auth(params: AuthenticationParams): Promise<void> {
    this.httpClient.post({
      url: this.url,
      body: params,
    });
  }
}
