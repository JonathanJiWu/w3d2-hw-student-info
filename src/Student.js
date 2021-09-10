import React from "react";
import Score from "./Score";


const Student = (props) => {
  const scoreComp = props.student.scores.map(i =><Score score={i.score} date={i.date}/>)
  console.log(`card-${props.i}`)
  return (
    <div id={`card-${props.i}`}>
      <h3>{props.student.name}</h3>
      <p>{props.student.bio}</p>
      {scoreComp}
      <h2>============================================</h2>

    </div>
  );
};

export default Student;
