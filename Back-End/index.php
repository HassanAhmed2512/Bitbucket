<?php

// Enable error reporting and display errors
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for Access-Control-Allow-Origin, Access-Control-Allow-Headers, and Access-Control-Allow-Methods
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

// Include the required classes
include 'Furniture.php';
include 'Book.php';
include 'DVD.php';

// Get the HTTP request method
$method = $_SERVER['REQUEST_METHOD'];

// Process the HTTP request based on the method
switch ($method) {
    case "GET":
        // Handle GET request
        $getAll = new Furniture();
        $getAll->getAll();
        break;

    case "POST":
        // Handle POST request
        $data = json_decode(file_get_contents('php://input'));

        switch ($data->productType) {
            case "size":
                $dvd = new DVD();
                $dvd->createDVD($data);
                break;

            case "weight":
                $book = new Book();
                $book->createBook($data);
                break;

            case "dimensions":
                $furniture = new Furniture();
                $furniture->createFurniture($data);
                break;
        }
        break;

    case "DELETE":
        // Handle DELETE request
        $remove = json_decode(file_get_contents('php://input'));
        $deleteProduct = new Furniture();
        $deleteProduct->delete($remove);
        break;
}
