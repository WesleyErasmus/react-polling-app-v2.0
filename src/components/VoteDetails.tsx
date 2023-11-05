import "../styles/voteDetails.css";
import { userData } from "../services/userData";

const VoteDetails = () => {
    // Total votes  
    const totalVotes = userData.length;

  return (
    <>
      {/* User profile container */}
      <div className="vote-img-details-flex-container">
        {/* Voter profile image */}
        {userData.map((userData) => (
          <img
            key={userData.id}
            className="voter-profile-img"
            src={userData.voterAvatar}
            alt="voter profile images"
          />
        ))}

        {/* Votes Details */}
        <div className="voteDetails">
          <div className="total-votes">Total Votes: {totalVotes}</div>
          {/* Press and hold the Alt key, then type 0183 in the numeric keypad to type the dot character */}
          <span className="dot-divider">·</span>
          <div className="days-left">5 Days Left</div>
        </div>
      </div>
    </>
  );
};

export default VoteDetails;
