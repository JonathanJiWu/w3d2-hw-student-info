import React from "react";

const Score = (props) => {
//   const ScoreComp = studentData.students.scores.map((i) => <Score score={i} />);
  return (
    <div>
      <h5>Score: {props.score}</h5>
      <h6>Date: {props.date}</h6>
    </div>
  );
};

export default Score;
