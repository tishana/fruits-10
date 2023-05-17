const React = require('react')
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render() {
        const { veg } = this.props
        return (
            <DefaultLayout title={"Veg Index Page"}>
                <nav>
                    <a href="/vegetables/new">Create a New Veggie</a>
                </nav>
                <ul>
                    {veg.map((veggie, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/vegetables/${veggie.id}`}>
                                    {veggie.name}
                                </a>{' '}
                                is {veggie.color} <br></br>
                                {veggie.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat `}
                                <br />
                                <a href={`/vegetables/${veggie._id}/edit`}>Edit</a>
                                <form action={`/vegetables/${veggie._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index