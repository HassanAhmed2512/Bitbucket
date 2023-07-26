import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Header = ({ type, data, remove, setSelectedCardIds }) => {
  const navigate = useNavigate();

  // Function to handle the add button click
  const handleAdd = async (e) => {
    e.preventDefault();

    // Check if all required data is provided before submitting
    if (!data.name || !data.price || !data.sku) {
      // Display an error toast if required data is missing
      toast.error("Please, submit required data", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Check if data for the indicated type is provided
    if (
      !data.size &&
      !data.weight &&
      !data.height &&
      !data.width &&
      !data.length
    ) {
      // Display an error toast if data for the indicated type is missing
      toast.error("Please, provide the data of indicated type", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      // Send a POST request to add the data
      const res = await axios.post("http://localhost/BackEnd/", data);
      
      // If the request is successful, navigate to the home page
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.status == 409) {
        // Display an error toast if the SKU is already used
        toast.error("This SKU Used", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  // Function to handle the mass delete button click
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Send a DELETE request to remove selected data
      const res = await axios.delete("http://localhost/BackEnd/", {
        data: remove,
      });
      // Clear the selected card IDs after successful deletion
      setSelectedCardIds([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Header container
    <div className="header">
      <div className="headerContainer">
        {type == "home" ? (
          // If on home page, display "Product List"
          <>
            <span className="headerText"> Product List </span>

            <div className="headerItems">
              {/* Link to add a new product */}
              <Link
                to="/addproduct"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="headerButtom"> ADD </button>{" "}
              </Link>

              {/* Button for mass delete */}
              <button
                className="headerButtom"
                id={"delete-product-btn"}
                onClick={handleDelete}
              >
                {" "}
                MASS DELETE{" "}
              </button>
            </div>
          </>
        ) : (
          // If on add product page, display "Product Add"
          <>
            <span className="headerText"> Product Add </span>

            <div className="headerItems">
              {/* Button to save the product */}
              <button className="headerButtom" onClick={handleAdd}>
                {" "}
                Save{" "}
              </button>
              {/* Link to cancel and go back to home page */}
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <button className="headerButtom"> Cancel </button>{" "}
              </Link>{" "}
            </div>
          </>
        )}
      </div>

      {/* Horizontal line to separate header from content */}
      <hr />
    </div>
  );
};
