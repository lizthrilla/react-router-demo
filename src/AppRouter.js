import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageOne from './components/Page1'

const Index = () => {
    return <h2>Home</h2>
}

const About = () => {
    return <h2>About</h2>
}

const User = ({match}) => {
    return <h3>Requested User: {match.params.id}</h3>
}

const Users = ({ match }) => {
    return (
        <div>
            <h3>
                <Link to={`${match.url}/Bree`}>Bree</Link>
            </h3>
            <h3>
                <Link to={`${match.url}/Jose`}>Jose</Link>
            </h3>
            <h3>
                <Link to={`${match.url}/Katherine`}>Katherine</Link>
            </h3>

            <Route path={`${match.path}/:id`} component={User} />
            <Route
            exact
            path={match.path}
            render={() => <h3>Please select a user.</h3>}
            />
        </div>
    )
}

const Topic = ({match}) => {
    return <h3>Requested Param: {match.params.id}</h3>
}

const Topics = ({ match }) => {
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        <li>
                            <Link to='/page1/'>Page One</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/page1" component={PageOne} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    )
}

export default AppRouter