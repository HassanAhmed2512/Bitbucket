<?php

include 'Product.php';

/**
 * Class Furniture
 * Represents a Furniture product and extends the Product class.
 */
class Furniture extends Product
{

	/**
	 * Create a new Furniture product.
	 *
	 * @param object $data The data of the Furniture product to be created.
	 */
	function createFurniture($data)
	{
		$objDb = new DBConnection();
		
		// Check if the SKU is unique
		$unique = $objDb->skuIsUnique($data->sku);

		if ($unique == 1) {
			http_response_code(409); // Set the HTTP status code to 409 Conflict
			$response = ['status' => 409, 'message' => 'This SKU is already used.'];
			echo json_encode($response);
			return;
		}

		// Insert the Furniture product into the database
		$res = $objDb->setFurniture($data);

		// Prepare the response based on the success of the insertion
		if ($res == 1) {
			$response = ['status' => 1, 'message' => 'Record created successfully.'];
		} else {
			$response = ['status' => 0, 'message' => 'Failed to create record.'];
		}

		// Output the response as JSON
		echo json_encode($response);
	}
}
