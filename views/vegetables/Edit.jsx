const React = require('react')
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
          <form action={`/veggies/${this.props.veggie._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.veggie.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={this.props.veggie.color}/><br/>
          Is Ready To Eat:
              { this.props.veggie.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit