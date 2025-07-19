import React from 'react';

function Props(props) {
  return (
    <div>
      <h2>Hello! Great to meet you {props.name}</h2>

      {/* Boolean prop example */}
      {props.isStudent !== undefined && (
        <p>status : {props.isStudent ? "student" : "not a student" }</p>
      )}

      {/* Object prop example */}
      {props.user && (
        <p>{props.user.name} is {props.user.age} years old</p>
      )}
    </div>
  );
}

export default Props;
