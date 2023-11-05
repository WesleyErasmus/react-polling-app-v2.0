import "../styles/responses.css";
import { userData } from "../services/userData";
import VoteDetails from "./VoteDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Interface declaration is used for defining the structure of objects and ensuring type safety
interface userData {
  id: number;
  vote: string;
  voterAvatar: string;
}

const Responses = (props: {
  heading: string

}) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  // Initialize a variable 'voteCounts' using the 'reduce' method on the 'userData' array.
  const voteCounts = userData.reduce((votes, user) => {
    // Check if the 'user.vote' value is not a key in the 'votes' object.
    if (!votes[user.vote]) {
      // If it's not a key, initialize it with a count of 1.
      votes[user.vote] = 1;
    } else {
      // If it's already a key, increment the count by 1.
      votes[user.vote]++;
    }
    // Return the 'votes' object, which will be used as the accumulator in the next iteration.
    return votes;
  }, {}); // Initialize 'votes' as an empty object.

  // 'voteCounts' now contains the count of votes for each unique 'user.vote' value.

  // Object.values() is used to extract the keys (votes) from the voteCounts object.
  // The reduce method is then applied to iterate over these keys and calculate the total number of votes.
  const totalVotes = Object.values(voteCounts).reduce(
    (total, current) => total + current,
    0
  );

  return (
    <div className="responses-container">
      <div className="responses-heading">{props.heading}</div>
      <ul className="results-list">
        {Object.keys(voteCounts).map((vote) => {
          // ***NOTE*** voteCounts[vote]: has to be square brackets because the property is dynamic and not known in advance. Dot notation cannot be used in this instance - Bracket notation needs to be used to access dynamic properties and properties that are determined at runtime.
          const percentage = (voteCounts[vote] / totalVotes) * 100;

          return (
            <li className="results-list-item" key={vote}>
              {/* Display the calculated percentage */}
              {percentage}% <span className="vote-option-text">{vote}</span>
              {/* Progress bar */}
              <div
                className="progress"
                role="progressbar"
                aria-label="Poll Responses"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: 7 }}
              >
                <div
                  className="progress-bar"
                  // Using template literal to set the percentage as a string for the width property
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Vote details component */}
      <VoteDetails />
    </div>
  );
};

export default Responses;
