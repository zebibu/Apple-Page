const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

//  Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  MySQL connection
const connection = mysql.createConnection({
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  host: "localhost",
  user: "myDBuser",
  password: "mypassword",
  database: "myDB",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Apple DB API 🚀");
});

// ✅ Route to create all tables
// app.get("/install", (req, res) => {
//   // products table
//   let createProducts = `CREATE TABLE IF NOT EXISTS Products (
//     product_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_url VARCHAR(255) NOT NULL,
//     product_name VARCHAR(255) NOT NULL
// )
// `;
//   // product description table
//   let createProductDescription = `CREATE TABLE IF NOT EXISTS ProductDescription (
//     description_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT,
//     product_brief_description TEXT,
//     product_description TEXT,
//     product_img VARCHAR(255),
//     product_link VARCHAR(255),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
// )`;
//   // product price table
//   let createProductPrice = `CREATE TABLE IF NOT EXISTS ProductPrice (
//     price_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT,
//     starting_price VARCHAR(50),
//     price_range TEXT,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
// )`;
//   // user table
//   let createUser = `CREATE TABLE IF NOT EXISTS Users (
//     user_id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT,
//     user_name VARCHAR(100) NOT NULL,
//     user_password VARCHAR(100) NOT NULL
// )
// `;

//   // order id table
//   let createOrder = `CREATE TABLE IF NOT EXISTS Orders (
//     order_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id),
//     FOREIGN KEY (user_id) REFERENCES Users(user_id)
// );
// `;

//   connection.query(createProducts, (err) => {
//     if (err) console.log(err);
//   });
//   connection.query(createProductDescription, (err) => {
//     if (err) console.log(err);
//   });
//   connection.query(createProductPrice, (err) => {
//     if (err) console.log(err);
//   });
//   connection.query(createOrder, (err) => {
//     if (err) console.log(err);
//   });
//   connection.query(createUser, (err) => {
//     if (err) console.log(err);
//   });
//   res.end("Table Created");
// });

// POST
// app.post("/add-product", (req, res) => {
//     console.log("✅ req.body:", req.body);	//Converts raw request into JS object(body-parser)
//   const {
//     product_name,
//     product_brief_description,
//     product_description,
//     product_img,
//     product_link,
//     starting_price,
//     price_range,
//     user_name,
//     user_password
//   } = req.body;

//   if (!product_name) {
//     return res.status(400).json({ error: "product_name is missing" });
//   }

//   const insertProduct = `INSERT INTO Products (product_name) VALUES (?)`;

//   connection.query(insertProduct, [product_name], (err, result) => {
//     if (err) {
//       console.error("Insert into Products failed:", err);
//       return res.status(500).json({ error: err.message });
//     }

//     const product_id = result.insertId;

//     const insertDescription = `
//       INSERT INTO ProductDescription
//       (product_id, product_brief_description, product_description, product_img, product_link)
//       VALUES (?, ?, ?, ?, ?)`;

//     connection.query(
//       insertDescription,
//       [product_id, product_brief_description, product_description, product_img, product_link],
//       (err) => {
//         if (err) {
//           console.error("Insert into ProductDescription failed:", err);
//           return res.status(500).json({ error: err.message });
//         }

//         const insertPrice = `
//           INSERT INTO ProductPrice (product_id, starting_price, price_range)
//           VALUES (?, ?, ?)`;

//         connection.query(
//           insertPrice,
//           [product_id, starting_price, price_range],
//           (err) => {
//             if (err) {
//               console.error("Insert into ProductPrice failed:", err);
//               return res.status(500).json({ error: err.message });
//             }

//             if (user_name && user_password) {
//               const insertUser = `
//                 INSERT INTO Users (user_name, user_password)
//                 VALUES (?, ?)`;

//               connection.query(
//                 insertUser,
//                 [user_name, user_password],
//                 (err, userResult) => {
//                   if (err) {
//                     console.error("Insert into Users failed:", err);
//                     return res.status(500).json({ error: err.message });
//                   }

//                   const user_id = userResult.insertId;

//                   const insertOrder = `
//                     INSERT INTO Orders (product_id, user_id)
//                     VALUES (?, ?)`;

//                   connection.query(
//                     insertOrder,
//                     [product_id, user_id],
//                     (err) => {
//                       if (err) {
//                         console.error("Insert into Orders failed:", err);
//                         return res.status(500).json({ error: err.message });
//                       }

//                       return res.json({ message: "Product, user, and order added successfully!" });
//                     }
//                   );
//                 }
//               );
//             } else {

//               return res.json({ message: "Product added (no user or order inserted)." });
//             }
//           }
//         );
//       }
//     );
//   });
// });

//Get all iphone products
app.get("/iphones", (req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      console.log(rows);
      let iphones = { products: rows };
      // iphones.products = rows;
      console.log(iphones);
      var stringIphones = JSON.stringify(iphones);
      console.log(stringIphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

// Single Iphone product
app.get("/iphones/:id", (req, res) => {
  const phoneId = req.params.id;
  const query = `
    SELECT * FROM Products
    JOIN ProductDescription ON Products.product_id = ProductDescription.product_id
    JOIN ProductPrice ON Products.product_id = ProductPrice.product_id
    WHERE Products.product_id = ?
  `;

  myDB.query(query, [phoneId], (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).send("Internal Server Error");
    } else if (rows.length === 0) {
      res.status(404).send("Product not found");
    } else {
      const phone = rows[0];
      res.json(phone);
    }
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
