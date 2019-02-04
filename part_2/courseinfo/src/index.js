import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const Courses = (props) => {
  const listCourses = props.courses.map((course) =>
    <div key={course.id}>
      <Course course={course}/>
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