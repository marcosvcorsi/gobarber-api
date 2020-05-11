import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

class FakeMailProdiver implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendEmail(data: ISendMailDTO): Promise<void> {
    this.messages.push(data);
  }
}

export default FakeMailProdiver;
