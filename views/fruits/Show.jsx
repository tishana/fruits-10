// requires at the top 
const React = require('react') 

// component... This one is a class component
class Show extends React.Component {
   render () {
    const fruit = this.props.fruit
    return (
        <div>
        <h1> Fruits Show Page </h1>
          The {fruit.name} is {fruit.color}
          {fruit.readyToEat? '. Its is ready to eat' : '. It is not ready to eat... Cant touch this' }
          <nav>
                    <a href="/fruits">Back to Fruits</a>
                </nav>
        </div>
     )
    }
 }
 module.exports  = Show;