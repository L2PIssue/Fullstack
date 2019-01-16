import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/><br/>
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/><br/>
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/><br/>
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        yhteensä {props.total} tehtävää
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts[0].exercises
        +course.parts[1].exercises
        +course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))