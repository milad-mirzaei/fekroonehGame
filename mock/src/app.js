const parse = require("parse-link-header");
const jsonServer = require("json-server");
const cors = require("cors");
const { getDatabase } = require("../seed");

const app = jsonServer.create();
const router = jsonServer.router(getDatabase());

app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.options("*", cors());

app.use(jsonServer.bodyParser);

app.use(function (req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    // We need a fake delay in dev environment for all routes
    setTimeout(next, 500);
  } else {
    next();
  }
});

app.use(
  jsonServer.defaults({
    logger: process.env.NODE_ENV !== "production",
  })
);

app.post("/auth/otp/send", function (req, res, next) {
  const response = {
    code: 123456,
  };
  if (req.body.mobile === "09107787105") {
    res.jsonp({ ...response, password: true });
  }
  res.jsonp({ ...response, password: false });
});

app.post("/auth/otp/login-code", function (req, res, next) {
  const response = { token: "abc123" };
  const { code, mobile } = req.body;
  if (code === "123456" && mobile !== "09107787105") {
    res.jsonp(response);
  } else if (code === "123456" && mobile === "09107787105") {
    res.json({});
  } else {
    res.status(401).jsonp({ message: "Wrong code or password" });
  }
});

app.post("/auth/otp/login-password", function (req, res, next) {
  const response = { token: "abc123" };
  const { password, code } = req.body;
  if (code === "123456" && password === "abc123") {
    res.jsonp(response);
  } else {
    res.status(401).jsonp({ message: "Wrong code or password" });
  }
});

app.post("/auth/otp/set-password", function (req, res, next) {
  const response = {};
  const { newPassword, confirmPassword } = req.body;
  if (newPassword === confirmPassword) {
    res.jsonp(response);
  } else {
    res.status(401).jsonp({ message: "Passwords do not match" });
  }
});

app.post("/book-builder/save-book", function (req, res, next) {
  const response = {
    message: "Book has been saved successfully",
  };
  if (req.body) {
    res.jsonp(response);
  }
  res.status(400).jsonp({ message: "Bad request" });
});

app.use(router);

router.render = (req, res) => {
  const response = res.locals.data;
  if (req.method === "GET") {
    const isArray =
      Array.isArray(response) && req.originalUrl.indexOf("_limit") > -1;
    const link = res.getHeader("link");
    const parsed = parse(link);
    let meta = { currentPage: 1, lastPage: 1 };
    if (isArray) {
      if (parsed) {
        let currentPage = parseInt(parsed.last._page);
        if (parsed.next) {
          currentPage = parseInt(parsed.next._page) - 1;
        }

        meta = {
          currentPage,
          lastPage: parseInt(parsed.last._page),
        };
        res.status(200).jsonp({ data: response, meta });
      } else {
        res.status(200).jsonp({ data: response, meta });
      }
    } else {
      res.status(200).jsonp({ data: response });
      // res.jsonp(response);
    }
  } else {
    res.status(200).jsonp({ data: response });
    // res.jsonp(response);
  }
};

module.exports = app;
