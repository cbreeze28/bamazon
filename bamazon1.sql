DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name varchar(200) NULL,
  department_name varchar(200) NULL,
  price decimal(8, 2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skateboard", "Sporting_Goods", 98.99, 1200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bingo", "Games", 19.99, 2000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer", "Electronics", 999.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pint Glass", "Kitchenware", 7.99, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chef Knife", "Kitchenware", 129.99, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox", "Electronics", 499.99, 850);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RISK", "Games", 39.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fishing Rod", "Sporting_Goods", 149.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "Sporting_Goods", 449.99, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation", "Electronics", 349.99, 10000);