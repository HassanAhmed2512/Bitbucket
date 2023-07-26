<?php

include 'DBConnection.php';

/**
 * Abstract class Product
 * Provides common methods for interacting with products data.
 */
abstract class Product
{
    /**
     * Get all products and output them as JSON.
     */
    public function getAll()
    {
        $objDb = new DBConnection();
        $data = $objDb->getProducts();
        echo json_encode($data);
    }

    /**
     * Delete products with the given IDs.
     *
     * @param array $data An array of product IDs to delete.
     */
    public function delete($data)
    {
        $objDb = new DBConnection();

        foreach ($data as $value) {
            $objDb->remove($value);
        }
    }
}
