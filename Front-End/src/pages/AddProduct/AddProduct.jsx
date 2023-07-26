import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import "./AddProduct.css";

const AddProduct = () => {
  // State to store form data
  const [data, setData] = useState({
    sku: undefined,
    name: undefined,
    price: undefined,
    productType: undefined,
    size: undefined,
    weight: undefined,
    height: undefined,
    width: undefined,
    length: undefined,
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    // Main container for the add product page
    <div className="addProduct">
      {/* Header component for the add product page */}
      <Header type={"add"} data={data} />

      {/* Form section */}
      <form id={"product_form"}>
        <div className="formText">
          {/* Labels for form inputs */}
          <span id={"sku"}> SKU </span>
          <span id={"name"}> Name </span>
          <span id={"price"}> Price ($) </span>
          <span> Type Switcher </span>

          {/* Conditional rendering based on productType */}
          {data.productType == "size" ? (
            <>
              <span> Size (MB) </span>
              <span id="desc"> Please, provide disc space in MB </span>
            </>
          ) : data.productType == "weight" ? (
            <>
              <span> Weight (KG) </span>
              <span id="desc"> Please, provide weight in KG </span>
            </>
          ) : data.productType == "dimensions" ? (
            <>
              {" "}
              <span> Height (CM) </span>
              <span> Width (CM) </span>
              <span> Length (Cm) </span>
              <span id="desc"> Please, provide dimensions in HxWxL format </span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="formInputs">
          {/* Input fields for SKU, Name, and Price */}
          <input
            type="text"
            placeholder="Enter SKU"
            id="sku"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Price"
            id="price"
            onChange={handleChange}
          />

          {/* Dropdown to select product type */}
          <select id="productType" onChange={handleChange}>
            <option value="0">Select Type :</option>
            <option value="size" id={"DVD"}>
              DVD-disc
            </option>
            <option value="weight" id={"Book"}>
              Book
            </option>
            <option value="dimensions" id={"Furniture"}>
              Furniture
            </option>
          </select>

          {/* Conditional rendering based on productType */}
          {data.productType == "size" ? (
            <>
              <input
                type="number"
                placeholder="Size"
                id="size"
                onChange={handleChange}
              />
            </>
          ) : data.productType == "weight" ? (
            <>
              <input
                type="number"
                placeholder="Weight"
                id="weight"
                onChange={handleChange}
              />
            </>
          ) : data.productType == "dimensions" ? (
            <>
              {" "}
              <input
                type="number"
                placeholder="Height"
                id="height"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Width"
                id="width"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Length"
                id="length"
                onChange={handleChange}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </form>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default AddProduct;
  