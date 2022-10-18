const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const port = 3000;

// import routes
let userRoutes = require("./routes/users.routes");
let authRoutes = require("./routes/auth.routes");

// set up view engines
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// use third-party middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));

// set up routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
  });
});

// Users routes
app.use("/users", userRoutes);
// Auth routes
app.use("/auth", authRoutes);

// listen on port
app.listen(port, () => {
  console.log("Server is running on port http://127.0.0.1:3000");
});

// SQL - Structured query language (Ngôn ngữ dùng để truy vấn dữ liệu từ DB)
// sheet, json (không hỗ trợ nhiều phương thức query, khó scale lên lớn...)
// --> Cần một nơi lưu trữ dữ liệu tối ưu hơn, dễ scalable, dễ query hơn
// --> Mysql
// SQL là ngôn ngữ dùng để truy vấn vào MySQL

// MySQL là gì?
// Là một RDBMS
// Relational Database Management System
// Hệ quản trị CSDL quan hệ
// Dữ liệu sẽ được lưu trữ trong CSDL
// dưới dạng bảng (table - entity - thực thể)

// Mỗi bảng sẽ có nhiều bản ghi (record) được lưu vào mỗi dòng (row)

// Mỗi dòng (row) sẽ có nhiều thuộc tính (column)

// Trong dự án thực tế, chúng ta sẽ phải thiết kế một bản vẽ cơ sở dữ liệu dạng quan hệ
// Bản vẽ cơ sở dữ liệu quan hệ có thể có 1 bảng duy nhất hoặc rất nhiều bảng liên
// kết với nhau bằng các mối quan hệ (1-1, 1-nhiều, nhiều-nhiều) [giải thích sau]

// SQL
// - Tạo schema (Tạo database)
// - Tạo bảng (table)

// - Kết nối Mysql đến project Express
// - Một số cú pháp C/R/U/D để thao tác với bảng
