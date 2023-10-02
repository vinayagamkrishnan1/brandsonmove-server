const dddd = "sadfasdf";
// import http from "http";
// import createError from "http-errors";
// import app from "../app";

// const normalizePort = (val: any) => {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     return val;
//   }
//   if (port >= 0) {
//     return port;
//   }
//   return false;
// };
// const port = normalizePort(process.env.PORT || "3000");
// app.set("port", port);

// // cors
// app.use((req: any, res: any, next: any) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Accept", "application/json");
//   res.header("Content-Type", "application/json");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS, PATCH",
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials",
//   );
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });


// const errorHandler = (error: any) => {
//   console.log("ERROR HANDLER::::", error);
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   const address = server.address();
//   const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
//   switch (error.code) {
//     case "EACCES":
//       console.error(bind + " requires elevated privileges.");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(bind + " is already in use.");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };

// const server = http.createServer(app);

// server.on("error", errorHandler);
// server.on("uncaughtException", errorHandler);

// server.on("listening", () => {
//   const address = server.address();
//   const bind = typeof address === "string" ? "pipe " + address : "port " + port;
//   console.log("SERVER IS UP ON PORT:" + bind);
// });

// server.listen(port);


// // catch 404 and forward to error handler
// app.use(function(req: any, res: any, next: any) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err: any, req: any, res: any, next: any) {
//   // set locals, only providing error in development
//   console.log("HANDLE ERROR", err);
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
