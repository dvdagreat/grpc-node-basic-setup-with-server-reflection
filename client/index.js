import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";
import { GRPC_HOST, PROTO_FILE_LOAD_OPTIONS, PROTOFILE_PATHS } from "./config.js";
import { AuthorService } from "./services/author.service.js";

const packageDefinitions = protoloader.loadSync(PROTOFILE_PATHS, PROTO_FILE_LOAD_OPTIONS);
const packages = grpc.loadPackageDefinition(packageDefinitions);

const authorClient = new packages.com.dvs.AuthorService(
  GRPC_HOST,
  grpc.credentials.createInsecure()
);
const authorService = new AuthorService(authorClient);

(async () => {
  const result = await authorService.getAllAuthors();
  console.log(result);
})();
