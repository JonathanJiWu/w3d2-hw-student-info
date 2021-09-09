import React from "react";

const Student = (props) => {
  console.log(props.studentData.students);
  console.log(props.students.name);
  return (
    <div>
      <h3>{props.students.name}</h3>
    </div>
  );
};

export default Student;
