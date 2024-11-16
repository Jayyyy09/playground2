import { AppLayout } from "@/layouts/AppLayout"
import { Heading, VStack } from "@chakra-ui/react"

export default function Home() {

  // Sample function for handling button actions
  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
    // Add your game logic here
  };

  return (
    <AppLayout>
      <Heading>Home</Heading>
      <div className="game-container">
        {/* Top section with three bars and three circles */}
        <div className="top-section">
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>

        {/* Bottom section with three buttons */}
        <div className="bottom-section">
          <button onClick={() => handleButtonClick("Action 1")}>Action 1</button>
          <button onClick={() => handleButtonClick("Action 2")}>Action 2</button>
          <button onClick={() => handleButtonClick("Action 3")}>Action 3</button>
        </div>
      </div>
      
      <style jsx>{`
        .game-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100vh;
          padding: 20px;
          background-color: blue; /* Background set to blue */
        }
        .top-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bars, .circles {
          display: flex;
          gap: 10px;
        }
        .bar {
          width: 0px;
          height: 10px;
          background-color: #888;
        }
        .circle {
          width: 20px;
          height: 20px;
          background-color: #f00;
          border-radius: 50%;
        }
        .character img {
          width: 100px;
          height: 100px;
        }
        .bottom-section {
          display: flex;
          gap: 10px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
        }
      `}</style>

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