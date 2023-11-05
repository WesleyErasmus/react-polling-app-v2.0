import { useState } from "react";
import "../styles/poll.css";
import VoteDetails from "./VoteDetails";

const Poll = (props: {
  heading: string;
  option1: string;
  option2: string;
  option3: string;
}) => {
  // Initialize a state variable to track the selected programming language. Set to an empty string
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      {/* Poll form */}
      <form className="poll-form" action="">
        {/* Form heading */}
        <div className="form-heading">{props.heading}</div>

        {/* Radio buttons container */}
        <div className="radio-buttons-flex-container">
          {/* Radio option 1 */}
          <label
            className={
              selectedValue === props.option1 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option1}
              name="language"
              checked={selectedValue === props.option1}
              onChange={() => setSelectedValue(props.option1)}
            />
            {/* Label name */}
            {props.option1}
          </label>

          {/* Radio option 2 */}
          <label
            className={
              selectedValue === props.option2 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option2}
              name="language"
              checked={selectedValue === props.option2}
              onChange={() => setSelectedValue(props.option2)}
            />
            {/* Label name */}
            {props.option2}
          </label>

          {/* Radio option 3 */}
          <label
            className={
              selectedValue === props.option3 ? "selected-bold-font" : ""
            }
          >
            <input
              type="radio"
              value={props.option3}
              name="language"
              checked={selectedValue === props.option3}
              onChange={() => setSelectedValue(props.option3)}
            />
            {/* Label name */}
            {props.option3}
          </label>
        </div>

        {/* Form footer */}
        <div className="form-footer-container">
          
          {/* Vote details component */}
          <VoteDetails />

          {/* Vote Button */}
          <div>
            <input className="form-submit-btn" type="submit" value="Vote" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Poll;
