import { HttpPostClientSpy } from '@/data/test/mock-http-client';
import { RemoteAuthetication } from './remote-authentication';
import { mockAuthentication } from '@/domain/test/mock-authentication';
import { faker } from '@faker-js/faker';

type SutTypes = {
  sut: RemoteAuthetication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthetication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth(mockAuthentication());

    expect(httpPostClientSpy.url).toBe(url);
  });

  test('Should call HttpPostClient with correct Body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthentication();

    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toBe(authenticationParams);
  });
});
