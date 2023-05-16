const React = require('react')

class Index extends React.Component {
  render() {
      const { veg } = this.props;
      return (
              <div>
                  <h1>Vegetables Index Page</h1>
                  <ul>
                      {veg.map((veg, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/vegetables/${i}`}>
                                      {veg.name}
                                  </a>{' '}
                                  is {veg.color} <br></br>
                                  {veg.readyToEat
                                      ? `It is ready to eat`
                                      : `It is not ready to eat`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                  <nav>
                    <a href="/vegetables/new">Create a New Veggie</a>
                </nav>
              </div>
      );
  }
}
module.exports = Index;