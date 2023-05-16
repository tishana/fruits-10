// requires at the top 
const React = require('react') 

// component... This one is a class component
class Show extends React.Component {
   render () {
    const veg = this.props.veg
    return (
        <div>
        <h1> Veggies Show Page </h1>
          The {veg.name} is {veg.color}
          {veg.readyToEat? '. Its is ready to eat' : '. It is not ready to eat... Cant touch this' }
          <nav>
                    <a href="/vegetables">Back to Veggies</a>
                </nav>
        </div>
     )
    }
 }
 module.exports  = Show;