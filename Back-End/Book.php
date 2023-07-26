<?php


class Book extends Product
{
	/**
	 * Create a new book record in the database.
	 *
	 * @param object $data The data for the book product.
	 * @return void
	 */
	public function createBook($data)
	{
		// Create a new instance of the DBConnection class
		$dbConnection = new DBConnection();

		// Check if the SKU is unique
		$isSkuUnique = $dbConnection->skuIsUnique($data->sku);

		// If SKU is not unique, return an error response
		if ($isSkuUnique == 1) {
			http_response_code(409); // Set the HTTP status code to 409 Conflict
			$response = ['status' => 409, 'message' => 'This SKU Used.'];
			echo json_encode($response);
			return;
		}

		// Insert the book record into the database
		$result = $dbConnection->setBook($data);

		// Check if the insertion was successful and return appropriate response
		if ($result == 1) {
			$response = ['status' => 1, 'message' => 'Record created successfully.'];
		} else {
			$response = ['status' => 0, 'message' => 'Failed to create record.'];
		}
		echo json_encode($response);
	}
}
