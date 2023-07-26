import { Header } from "../../components/header/Header";
import "./Home.css";
import Footer from "./../../components/footer/Footer";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  // State to store the data retrieved from the backend
  const [data, Setdata] = useState([]);
  // State to store the IDs of the selected cards
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  // Fetch data from the backend API whenever the selectedCardIds state changes
  useEffect(() => {
    GetData();
  }, [selectedCardIds]);

  // Function to fetch data from the backend API
  function GetData() {
    axios
      .get("http://localhost/BackEnd/")
      .then((res) => {
        // Sort the data based on the 'id' property
        const sortedData = res.data.sort((a, b) => a.id - b.id);
        Setdata(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Function to handle changes in the selected cards
  function handleCardChange(cardId) {
    if (selectedCardIds.includes(cardId)) {
      // If the card is already selected, remove it from the list
      setSelectedCardIds(selectedCardIds.filter((id) => id !== cardId));
    } else {
      // If the card is not selected, add it to the list
      setSelectedCardIds([...selectedCardIds, cardId]);
    }
  }

  return (
    // Main container for the home page
    <div className="home">
      {/* Header component for the home page */}
      <Header
        type={"home"}
        remove={selectedCardIds}
        setSelectedCardIds={setSelectedCardIds}
      />

      {/* Container for displaying cards */}
      <div className="cardContainer">
        {data.map((item, index) => (
          // Render each card using the Card component
          <Card
            key={index}
            data={item}
            selectedCardIds={selectedCardIds}
            handleChange={handleCardChange}
          />
        ))}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};
