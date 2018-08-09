# bamazon
<h1>Operating Bamazon application</h1>
This is an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory. When the application is run it will ask the user which product they would like to buy via product ID number, and then it will ask the user the quantity of that product they would like to purchase. 

![alt text](https://github.com/cbreeze28/bamazon/blob/master/screenshots/Screenshot%20(9).png)

After the user has chosen the product and quantity the total price for that quantity of items will be provided. The application will then ask the user if they will be paying for their purchase with cash.

![alt text](https://github.com/cbreeze28/bamazon/blob/master/screenshots/Screenshot%20(10).png)

If the user pays with cash then they will receive a thank you and the stock quantity will be updated. The newly populated table will display and ask the user for the next item they would like to purchase.

![alt text](https://github.com/cbreeze28/bamazon/blob/master/screenshots/Screenshot%20(11).png)

<h1>Fail calls</h1>
If the user selects their product, but requests a quantity not available they will be prompted with a come back another time message.

![alt text](https://github.com/cbreeze28/bamazon/blob/master/screenshots/Screenshot%20(12).png)

If the user selected a product and quantity the store can handle, but did not come with cash then the user will be prompted with a message about the credit card machines being down and to come back with cash.

![alt text](https://github.com/cbreeze28/bamazon/blob/master/screenshots/Screenshot%20(13).png)