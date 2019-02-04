import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce( (s, p) => {
    return {exercises: s.exercises+p.exercises}
  })
  return (
    <div>
      <p>
        yhteensä {total.exercises} tehtävää
      </p>
    </div>
  )
}

const Parts = (props) => {
  const listParts = props.parts.map((part) =>
    <li key={part.id} >{part.name} {part.exercises}</li>
  );
  return (
    <div>
      <ul>
        {listParts}
      </ul>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <Header course={course.name}/>
      <Parts parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course