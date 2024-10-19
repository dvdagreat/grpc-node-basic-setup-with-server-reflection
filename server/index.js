import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";
import { ReflectionService } from "@grpc/reflection";
import { GRPC_HOST, PROTO_FILE_LOAD_OPTIONS, PROTOFILE_PATHS } from "./config.js";
import { AuthorService } from "./services/author.service.js";

const packageDefinitions = protoloader.loadSync(PROTOFILE_PATHS, PROTO_FILE_LOAD_OPTIONS);
const reflectionServer = new ReflectionService(packageDefinitions);
const packages = grpc.loadPackageDefinition(packageDefinitions);

const authorService = packages.com.dvs.AuthorService.service;

const grpcServer = new grpc.Server();
reflectionServer.addToServer(grpcServer);
grpcServer.addService(authorService, new AuthorService());

// grpc.ServerCredentials.createInsecure() is used so we can test in our local system, use other options for production env
grpcServer.bindAsync(GRPC_HOST, grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`grpc server started at port ${port}`);
  }
});
