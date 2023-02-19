import { HttpPostClient } from '../../protocols/http/http-post-client';

export class RemoteAuthetication {
  constructor(private readonly url: string, private readonly httpClient: HttpPostClient) {}

  async auth(): Promise<void> {
    this.httpClient.post(this.url);
  }
}
