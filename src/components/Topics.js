import React from "react";
import Topic from "./Topic";
import { Route, Link } from "react-router-dom";

class Topics extends React.Component {
  renderingHandler = e => {
    console.log("ek", e);
  };

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link
              onClick={this.renderingHandler}
              to={`${this.props.match.url}/rendering`}
            >
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={this.props.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default Topics;
