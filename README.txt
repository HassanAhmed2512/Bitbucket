Project Documentation: Product Management System

Introduction
This project is a Product Management System (PMS) that allows users to view, add, and delete various products, including DVD discs, books, and furniture. The system provides a user-friendly web interface built with React on the front-end and PHP on the back-end to manage product data efficiently.

Table of Contents
Introduction

Overview
Table of Contents
Project Structure

Front-end
Back-end
Installation and Setup

Prerequisites
Front-end Setup
Back-end Setup
Database Configuration
Front-end Development

React Components
Routing
Styling
Back-end Development

PHP Classes
Database Connection
Product Management Features

Viewing Products
Adding Products
Deleting Products
Deployment

Deploying Front-end
Deploying Back-end
Conclusion

Summary
Future Improvements
Project Structure
Front-end
The front-end of the Product Management System is built using React, a popular JavaScript library for building user interfaces. The key components of the front-end are as follows:

Home: The home page that displays a list of products with options to select and delete them.

AddProduct: The page to add new products, providing a form to input product details.

Card: A reusable component to display individual product cards on the home page.

Header: The header component that appears on both the home and add product pages.

Footer: The footer component with project information.

Back-end
The back-end of the Product Management System is developed using PHP, which handles product data and database operations. The main back-end components include:

DBConnection: A PHP class that establishes a connection to the MySQL database.

Product: An abstract PHP class that defines common product functionalities.

DVD: A PHP class that handles DVD products, extends the Product class.

Book: A PHP class that handles book products, extends the Product class.

Furniture: A PHP class that handles furniture products, extends the Product class.

index.php: The entry point for API requests. It handles CRUD operations for products.

Installation and Setup
Prerequisites
Node.js: Install the latest version of Node.js on your system.

MySQL: Set up a MySQL server with a database to store product data.

Composer: Install Composer, a dependency manager for PHP, on your system.

Front-end Setup
Clone the repository from GitHub.

Open a terminal and navigate to the "frontend" directory.

Install the required dependencies by running:

Copy code
npm install
Start the development server with:

sql
Copy code
npm start
The front-end should now be accessible at http://localhost:3000.

Back-end Setup
Navigate to the "backend" directory.

Install the required PHP dependencies by running:

Copy code
composer install
Configure the database connection in the "DBConnection.php" file.

Deploy the PHP files to a PHP-enabled web server, such as Apache or Nginx.

Database Configuration
Create a MySQL database to store product data.

Update the database credentials in the "DBConnection.php" file to connect to your MySQL server.

Front-end Development
React Components
Home: Fetches product data from the back-end API and displays it in a list. Allows users to select and delete products.

AddProduct: Provides a form to input product details and sends them to the back-end API to add new products.

Card: Displays an individual product card with select and delete options.

Header: Displays the header with navigation buttons.

Footer: Displays the footer with project information.

Routing
The front-end uses the React Router library for routing between the home and add product pages.

Styling
Styling is implemented using CSS. The styles are defined in separate CSS files for each component.

Back-end Development
PHP Classes
DBConnection: Handles the connection to the MySQL database using the PDO (PHP Data Objects) extension.

Product: An abstract class that defines common product functionalities like adding, fetching, and deleting products.

DVD, Book, Furniture: Classes that extend the Product class to handle specific product types.

Database Connection
The "DBConnection.php" file establishes a connection to the MySQL database using the provided credentials.

Product Management Features
Viewing Products
The "Home" page fetches product data from the back-end API and displays a list of products in the form of individual cards.

Users can see the SKU, name, price, and type of each product on the home page.

Adding Products
The "AddProduct" page allows users to add new products to the system.

Users can input the SKU, name, price, and choose the product type (DVD, book, or furniture).

Depending on the product type, the user is required to provide specific details, such as size, weight, or dimensions.

Deleting Products
The "Home" page allows users to select one or multiple products by using checkboxes.

Users can click the "MASS DELETE" button in the header to delete the selected products from the system.

Deployment
Deploying Front-end
To deploy the front-end, build the project using the following command:

arduino
Copy code
npm run build
The build folder will contain static files that can be served by a web server.

Deploying Back-end
To deploy the back-end, copy the PHP files to a PHP-enabled web server (e.g., Apache or Nginx) and ensure that the database connection is correctly configured.

Conclusion
The Product Management System is a comprehensive solution for managing products with different types, including DVD, book, and furniture. It provides an intuitive user interface and efficient data handling capabilities, making it suitable for various e-commerce and inventory management applications. For future improvements, the project can be extended to support additional product types, advanced search functionalities, and user authentication for secure access. Additionally, unit tests and error handling mechanisms can be implemented for better reliability and maintainability.




