import { AppLayout } from "@/layouts/AppLayout"
import { Heading, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";

export default function Home() {
  const maxWidth = 200; // The maximum width each bar can have

  // Initialize the bars with their maximum width
  const [bondWidth, setBondWidth] = useState(50); // Start with 0 width
  const [energyWidth, setEnergyWidth] = useState(50); // Start with 0 width
  const [cleanlinessWidth, setCleanlinessWidth] = useState(50); // Start with 0 width

  // Function to handle button clicks
  const handleButtonClick = (action) => {
    console.log('${action} button clicked');
    
    // Increase the corresponding bar width without exceeding max width
    if (action === "Action 1" && bondWidth < maxWidth) {
      setBondWidth(bondWidth + 5); // Increase bond bar width
    } else if (action === "Action 2" && energyWidth < maxWidth) {
      setEnergyWidth(energyWidth + 5); // Increase energy bar width
    } else if (action === "Action 3" && cleanlinessWidth < maxWidth) {
      setCleanlinessWidth(cleanlinessWidth + 5); // Increase cleanliness bar width
    }
  };

  const [tondroidState, setTondroidState] = useState("neutral");

  // Function to change the TONDroid state based on certain conditions
  const checkBarStates = () => {
    if (bondWidth < 30) setTondroidState("drained");
    if (energyWidth < 30) setTondroidState("energized");
    if (cleanlinessWidth < 30) setTondroidState("dirty");
    else setTondroidState("neutral");
  };

  // Call checkBarStates whenever bar values change
  useEffect(() => {
    checkBarStates();
  }, [bondWidth, energyWidth, cleanlinessWidth]);

  // Function to update bar widths every second (for shrinking effect)
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the width of each bar by 10px every second
      if (bondWidth > 10) setBondWidth(bondWidth - 3);
      if (energyWidth > 10) setEnergyWidth(energyWidth - 3);
      if (cleanlinessWidth > 10) setCleanlinessWidth(cleanlinessWidth - 3);
    }, 1000); 

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [bondWidth, energyWidth, cleanlinessWidth]);

  return (
    <AppLayout>
      <Heading>Home</Heading>
      <div className="game-container">
        {/* Top section with three bars and three circles */}
        <div className="top-section">
          <div className="circle-bar-container">
            <div className="circle bond"></div>
            <div className="bar bond-bar" style={{ width: `${bondWidth}px` }}></div>
            
          </div>
          <div className="circle-bar-container">
            <div className="circle energy"></div>
            <div className="bar energy-bar" style={{ width: `${energyWidth}px` }}></div>
          </div>
                       

          <div className="circle-bar-container">
            <div className="circle cleanliness"></div>
            <div className="bar cleanliness-bar" style={{ width: `${cleanlinessWidth}px` }}></div>

          </div>
        <div className="middle-section">
            <img
              src="/images/tondroid-neutral.png"
              alt="TONDroid Neutral"
              className={`tondroid-img ${tondroidState === "neutral" ? "active" : ""}`}
              style={{ opacity: tondroidState === "neutral" ? 1 : 0 }}
            />
            <img
              src="/images/tondroid-drained.png"
              alt="TONDroid Drained"
              className={`tondroid-img ${tondroidState === "drained" ? "active" : ""}`}
              style={{ opacity: tondroidState === "drained" ? 1 : 0 }}
            />
            <img
              src="/images/tondroid-energized.png"
              alt="TONDroid Energized"
              className={`tondroid-img ${tondroidState === "energized" ? "active" : ""}`}
              style={{ opacity: tondroidState === "energized" ? 1 : 0 }}
            />
            <img
              src="/images/tondroid-dirty.png"
              alt="TONDroid Dirty"
              className={`tondroid-img ${tondroidState === "dirty" ? "active" : ""}`}
              style={{ opacity: tondroidState === "dirty" ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Bottom section with three buttons */}
        <div className="bottom-section">
          <div className="button-box">
            <button onClick={() => handleButtonClick("Action 1")}>Bond</button>
            <button onClick={() => handleButtonClick("Action 2")}>Energize</button>
            <button onClick={() => handleButtonClick("Action 3")}>Clean</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 80vh;
          padding: 20px;
          background-color: #A6D3F5;
        }
        
        .top-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Aligns the top section to the left */
          width: 100%; /* Ensures the section spans the full width */
        }

        .middle-section {
          display: flex;
          flex-direction: column;
          align-items: center; /* Aligns the top section to the left */
          width: 100%; /* Ensures the section spans the full width */
        }
        .circle-bar-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
        }
        .bond {
          background-color: #f00;
        }
        .energy {
          background-color: #0f0;
        }
        .cleanliness {
          background-color: #00f;
        }
        .bar-label-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Aligns the bar and label to the left */
        }
        .bar {
          height: 50px;
          margin-bottom: 5px; /* Space between bar and label */
        }
        .bond-bar {
          background-color: #c00;
        }
        .energy-bar {
          background-color: #0c0;
        }
        .cleanliness-bar {
          background-color: #00c;
        }
        .label {
          color: white;
          font-size: 16px;
          text-align: left; /* Align text to the left */
        }
        .bottom-section {
          display: flex;
          justify-content: center; /* Centers the bottom section */
          width: 100%; /* Ensures it stays centered within the container */
        }


        .tondroid {

          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-70%, -70%);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.5);
          transition: transform 0.3 ease;
          
        }
        .tondroid-img {
          position: fixed;
          transition: opacity 0.3s ease;
          animation: floatUpDown 2s infinite ease-in-out;
          transform: scale(0.5);
          transition: transform 0.3 ease;
          
        }

        .tondroid-img.active {
          opacity: 1;
        }

        @keyframes floatUpDown {
          0% {
            transform: translateY(-100px);
          }
          50% {
            transform: translateY(-120px);
          }
          100% {
            transform: translateY(-100px);
          }
        }


        .button-box {
          background-color: #333;
          padding: 20px;
          border-radius: 100px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          display: flex;
          gap: 60px;
        }
        button {
          padding: 10px 20px;
          font-size: 30px;
          color: white;
          background-color: #555;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s;
          display: flex;
        }
        button:hover {
          background-color: #777;
        }
      `}</style>
    </AppLayout>
  );
}
