export const PROTOFILE_PATHS = ["../proto/author.proto"];

export const GRPC_HOST = "localhost:50052"; // you can give any port you like

export const PROTO_FILE_LOAD_OPTIONS = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
