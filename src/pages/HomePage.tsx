import Poll from "../components/Poll";
import Responses from "../components/Responses";

const HomePage = () => {
  return (
    // App Home Page
    <div>
      {/* Poll component */}
      <Poll
        heading="What programming languages do you use during interviews?"
        option1={"JavaScript"}
        option2={"Python"}
        option3={"Go"}
      />

      <Responses heading="What programming language do you use during the coding interview?" />
    </div>
  );
};

export default HomePage;
