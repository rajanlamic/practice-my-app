import React from "react";
import { Button } from "reactstrap";
import {
  setDevelopment,
  setEnhancement,
  asynchronousDevelopment,
  loadCategoires
} from "./about-actions";
import { connect } from "react-redux";
import AboutChild from "./AboutChild";

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myVal: "myValue original"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => {
      return {
        myVal: `${prevState.myVal} myValue updated value`
      };
    });
  }

  clickHandler1 = () => {
    this.setState({
      myVal: `myValue second updated value`
    });
  };

  reduxHandlerDevelopment = () => {
    this.props.onDevelopment();
  };

  reduxHandlerEnhancement = () => {
    this.props.onEnhancement();
  };

  asynchronousDevelopmentClick = () => {
    this.props.onAsynchronousDevelopment();
  };

  loadCategoriesHandler = () => {
    this.props.onLoadCategories();
  };
  render() {
    return (
      <div>
        <h2>About</h2>
        <Button onClick={this.clickHandler}>Click</Button>
        <Button onClick={this.clickHandler1}>Click1</Button>
        <div>{this.state.myVal}</div>
        <Button onClick={this.reduxHandlerDevelopment}>
          Redux Click Development
        </Button>
        {this.props.isDevelopment && (
          <div className="development">Development Clicked</div>
        )}
        <Button onClick={this.reduxHandlerEnhancement}>
          Redux Click Enhancement
        </Button>
        {this.props.isEnhancement && (
          <div className="enhancement">Enhancement Clicked</div>
        )}
        <AboutChild myProp="myProp" />
        <Button onClick={this.asynchronousDevelopmentClick}>
          Asynchronous Click Development
        </Button>
        {this.props.isAsyncDevelopment && (
          <div className="async-development">Async Development Clicked</div>
        )}
        <Button onClick={this.loadCategoriesHandler}>Load Categories</Button>
        {this.props.isFetched &&
          this.props.data &&
          this.props.data.children &&
          this.props.data.children.map(item => {
            return <li>{item.title}</li>;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDevelopment: state.about.isDevelopment,
    isEnhancement: state.about.isEnhancement,
    isAsyncDevelopment: state.about.isAsyncDevelopment,
    isFetched: state.about.isFetched,
    data: state.about.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDevelopment: () => {
      dispatch(setDevelopment());
    },
    onEnhancement: () => {
      dispatch(setEnhancement());
    },
    onAsynchronousDevelopment: () => {
      dispatch(asynchronousDevelopment());
    },
    onLoadCategories: () => {
      dispatch(loadCategoires());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
