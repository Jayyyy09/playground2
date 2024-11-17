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
    if (bondWidth < 50) setTondroidState("drained");
    if (energyWidth < 50) setTondroidState("energized");
    if (cleanlinessWidth < 50) setTondroidState("dirty");
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
      if (bondWidth > 50) setBondWidth(bondWidth - 3);
      if (energyWidth > 50) setEnergyWidth(energyWidth - 3);
      if (cleanlinessWidth > 50) setCleanlinessWidth(cleanlinessWidth - 3);
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

      <style jsx>{
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    padding: 20px;
    background-color: #a6d3f5;
  }

  .top-section,
  .middle-section,
  .bottom-section {
    width: 100%;
  }

  .top-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .middle-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .circle-bar-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .circle {
    width: 15vw;
    height: 15vw;
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3vw;
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
    align-items: flex-start;
    width: 100%;
  }

  .bar {
    height: 5vh;
    margin-bottom: 5px;
    max-height: 50px;
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
    font-size: 1.2rem;
    text-align: left;
  }

  .bottom-section {
    display: flex;
    justify-content: center;
  }

  .tondroid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tondroid-img {
    position: absolute;
    transition: opacity 0.3s ease;
    animation: floatUpDown 2s infinite ease-in-out;
  }

  .tondroid-img.active {
    opacity: 1;
  }

  @keyframes floatUpDown {
    0% {
      transform: translateY(-9vh);
    }
    50% {
      transform: translateY(-10vh);
    }
    100% {
      transform: translateY(-9vh);
    }
  }

  .button-box {
    background-color: #333;
    padding: 5vw;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    gap: 5vw;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    font-size: 2rem;
    color: white;
    background-color: #555;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #777;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .circle {
      width: 12vw;
      height: 12vw;
      font-size: 2vw;
    }

    .bar {
      height: 4vh;
    }

    button {
      font-size: 1.5rem;
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .circle {
      width: 10vw;
      height: 10vw;
      font-size: 1.5rem;
    }

    .bar {
      height: 3vh;
    }

    .button-box {
      gap: 3vw;
    }

    button {
      font-size: 1rem;
      padding: 5px 10px;
    }
  }
}</style>
    </AppLayout>
  );
}
/*export default function Home() {
  //const { username } = useCurrentChatData()
  const user = useUser()
  const wallet = useWallet()

  return (
    <AppLayout>
      <Heading>Home</Heading>
        





    </AppLayout>
  )
}*/
