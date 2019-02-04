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

const Courses = (props) => {
  const listCourses = props.courses.map((course) =>
    <div key={course.id}>
      <Header course={course.name}/>
      <Parts parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
  return (
    <div>
      {listCourses}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
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
        }
      ]
    },
    {
      name: 'Uusi kurssi',
      id: 2,
      parts: [
        {
          name: 'Osa 1',
          exercises: 10,
          id: 4
        },
        {
          name: 'Osa 2',
          exercises: 7,
          id: 5
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))