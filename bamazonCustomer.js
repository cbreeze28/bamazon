var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "Qaplzaml28!",
  database: "bamazon"
});

//Below will display data parse

// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("SELECT * FROM bamazon.products", function(err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//   });

function afterConnection() {
  connection.query("SELECT * FROM bamazon.products;", function(err, res) {
    var table = new Table({
        head: ['id', 'product name', 'department', 'price', 'stock quantity']
    });
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    // Fancy Table
    console.log(table.toString());
    inquirer
    .prompt([{
        type: "input",
        name: "idItem",
        message: "What would you like to buy? Please select item by id number",
    }, {
        type: "input",
        name: "quantityItem",
        message: "How many of the selected product would you like to buy? Please check active stock levels before purchase.",
    }])
      .then(function(purchaseOrder) {
        connection.query("SELECT * FROM products WHERE id=?", purchaseOrder.idItem, function(err, res){
            for (var i = 0; i < res.length; i++) {
                if (purchaseOrder.quantityItem > res[i].stock_quantity) {
                    console.log("Sorry but we do not have that quantity at this time. Please come back tomorrow");
                } else {
                    var proPrice = res[i].price;
                    var proQuantity = purchaseOrder.quantityItem;
                    var total = proPrice * proQuantity;
                    console.log("Product: " + res[i].product_name + " Quantity: " + proQuantity + " at $" + res[i].price);
                    console.log("Comes to a total of: $" + total);

                    var updateStock = (res[i].stock_quantity - purchaseOrder.idItem);
                    var userId2 = (purchaseOrder.idItem);
                }
            }
        })
      });
  });
}
afterConnection();