import { useState } from "react";
import "./Card.css";

const Card = ({ data, selectedCardIds, handleChange }) => {
  // State to manage the card ID
  const [id, setId] = useState(0);

  return (
    <div className="card">
      {/* Display SKU, Name, and Price */}
      <span>{data.sku}</span>
      <span>{data.name}</span>
      <span>{data.price} $</span>

      {/* Display additional details based on the product type */}
      {data.type === "size" ? (
        <>
          <span>Size: {data.size} MB</span>
        </>
      ) : data.type === "weight" ? (
        <>
          {" "}
          <span>Weight: {data.weight} KG</span>{" "}
        </>
      ) : (
        <>
          {" "}
          <span>
            Dimensions: {data.height}x{data.width}x{data.length}{" "}
          </span>{" "}
        </>
      )}

      {/* Checkbox to select the card */}
      <input
        type="checkbox"
        className="delete-checkbox"
        value={data.id}
        checked={selectedCardIds.includes(data.id)}
        onChange={() => handleChange(data.id)}
      />
    </div>
  );
};

export default Card;
