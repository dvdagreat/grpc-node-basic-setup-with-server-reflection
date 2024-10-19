const authors = [
  {
    id: 1,
    name: "divyesh",
  },
  {
    id: 2,
    name: "john doe",
  },
];

export class AuthorService {
  getAllAuthors(call, callback) {
    return callback(null, {
      authors,
    });
  }

  findAuthorById(call, callback) {
    const id = call.request.author_id;
    let error = null;

    const author = authors.find((a) => a.id == id);

    if (!author) {
      error = new Error("Author not found");
    }

    return callback(null, {
      author,
    });
  }
}
