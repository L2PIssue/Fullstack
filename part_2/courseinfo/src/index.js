import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.map((part) =>
    sum = sum + part.exercises
  );
  return (
    <div>
      <p>
        yhteensä {sum} tehtävää
      </p>
    </div>
  )
}

const Parts = (props) => {
  const listParts = props.parts.map((part) =>
    <li>{part.name} {part.exercises}</li>
  );
  return (
    <div>
      <ul>
        {listParts}
      </ul>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}/>
      <Parts parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      },
      {
        name: 'Uusi osa',
        exercises: 1,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))