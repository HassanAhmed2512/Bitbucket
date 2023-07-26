# Product Management System (PMS)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![Product Management System](https://your-website-url.com/images/pms-icon.png)

## Introduction

The Product Management System (PMS) is a web application built with React and PHP that allows users to manage various products, including DVD discs, books, and furniture. This repository contains the front-end and back-end code to facilitate efficient product management.

## Table of Contents

- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Front-end Setup](#front-end-setup)
  - [Back-end Setup](#back-end-setup)
  - [Database Configuration](#database-configuration)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation and Setup

### Prerequisites

- Node.js
- MySQL
- Composer

### Front-end Setup

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the `frontend` directory.
3. Install the required dependencies:
npm install

4. Start the development server:
npm start

The front-end should now be accessible at `http://localhost:3000`.

### Back-end Setup

1. Navigate to the `backend` directory.
2. Install the required PHP dependencies:
composer install

3. Configure the database connection in the `DBConnection.php` file.
4. Deploy the PHP files to a PHP-enabled web server, such as Apache or Nginx.

### Database Configuration

1. Create a MySQL database to store product data.
2. Update the database credentials in the `DBConnection.php` file to connect to your MySQL server.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

- **frontend**: Contains the React front-end code and components.
- **backend**: Contains the PHP back-end code and classes to handle product data.

## Features

- View a list of products with SKU, name, price, and type information.
- Add new products with SKU, name, price, and product type (DVD, book, or furniture).
- Depending on the product type, provide specific details such as size, weight, or dimensions.
- Delete one or multiple products using the "MASS DELETE" button.

## Usage

1. Start the front-end development server as described in the installation steps.
2. Access the front-end at `http://localhost:3000` in your web browser.
3. Use the interface to view existing products or add new products.
4. Select products using checkboxes and click the "MASS DELETE" button to delete selected products.

## Deployment

### Deploying Front-end

To deploy the front-end, build the project using the following command:

npm run build


The build folder will contain static files that can be served by a web server.

### Deploying Back-end

To deploy the back-end, copy the PHP files to a PHP-enabled web server (e.g., Apache or Nginx) and ensure that the database connection is correctly configured.

## Contributing

Contributions to this project are welcome! If you find any issues or want to add new features, please feel free to create pull requests or raise issues.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
