import express, { Application } from 'express';
import createError from "http-errors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes/index";

const app: Application = express();

// Express middlewares
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const normalizePort = (val: any) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Accept", "application/json");
    res.header("Content-Type", "application/json");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, PATCH",
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials",
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {
    next(createError(404));
});
  
// error handler
app.use(function(err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    console.log("HANDLE ERROR", err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});