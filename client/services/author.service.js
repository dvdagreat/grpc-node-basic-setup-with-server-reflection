export class AuthorService {
  constructor(grpcClient) {
    this.client = grpcClient;
  }

  getAllAuthors = async () => {
    const requestParams = {};

    return new Promise((resolve, reject) => {
      this.client.getAllAuthors(requestParams, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };

  findAuthorById = async (id) => {
    const requestParams = { author_id: id };

    return new Promise((resolve, reject) => {
      this.client.findAuthorById(requestParams, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
}
