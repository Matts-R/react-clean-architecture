import { HttpPostClient } from '../../protocols/http/http-post-client';
import { RemoteAuthetication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
      }
    }

    const url = 'anything';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthetication(url, httpPostClientSpy);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
