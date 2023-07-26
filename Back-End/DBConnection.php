<?php

/**
 * Class DBConnection
 */
class DBConnection
{
    private $sName = "localhost";
    private $uName = "root";
    private $pass = "";
    private $db_name = "products";

    private $conn;

    /**
     * DBConnection constructor.
     */
    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->sName;dbname=$this->db_name", $this->uName, $this->pass);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            exit;
        }
    }

    /**
     * Check if SKU is unique.
     *
     * @param string $sku
     * @return int
     */
    public function skuIsUnique($sku)
    {
        $sql = "SELECT sku FROM products WHERE sku=?";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([$sku]);

        if ($stmt->rowCount() >= 1) {
            $data = $stmt->fetch();
            if ($data['sku'] == $sku) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    /**
     * Get all products.
     *
     * @return array
     */
    public function getProducts()
    {
        $sql = "SELECT * FROM products";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }

    /**
     * Create a book product.
     *
     * @param stdClass $data
     * @return int
     */
    public function setBook($data)
    {
        try {
            $type = "weight";
            $sql = "INSERT INTO products(sku, name, price, type, weight) VALUES(?,?,?,?,?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$data->sku, $data->name, $data->price, $type, $data->weight]);
            return 1;
        } catch (PDOException $e) {
            return 0;
        }
    }

    /**
     * Create a DVD product.
     *
     * @param stdClass $data
     * @return int
     */
    public function setDVD($data)
    {
        try {
            $type = "size";
            $sql = "INSERT INTO products(sku, name, price, type, size) VALUES(?,?,?,?,?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$data->sku, $data->name, $data->price, $type, $data->size]);
            return 1;
        } catch (PDOException $e) {
            return 0;
        }
    }

    /**
     * Create a furniture product.
     *
     * @param stdClass $data
     * @return int
     */
    public function setFurniture($data)
    {
        try {
            $type = "dimensions";
            $sql = "INSERT INTO products(sku, name, price, type, height, width, length) VALUES(?,?,?,?,?,?,?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$data->sku, $data->name, $data->price, $type, $data->height, $data->width, $data->length]);
            return 1;
        } catch (PDOException $e) {
            return 0;
        }
    }

    /**
     * Delete a product by ID.
     *
     * @param int $id
     * @return int
     */
    public function remove($id)
    {
        $sql = "DELETE FROM products WHERE id =?";
        $stmt = $this->conn->prepare($sql);
        $re = $stmt->execute([$id]);
        if ($re) {
            return 1;
        } else {
            return 0;
        }
    }
}
