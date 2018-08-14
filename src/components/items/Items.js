import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { setDevelopment, setEnhancement } from "./items-actions";
import { connect } from "react-redux";
import withItems from "./withItems";
import withLevelUp from "./withLevelUp";

export class Items extends React.Component {
  reduxHandlerDevelopment = () => {
    this.props.onDevelopment();
  };

  componentDidMount() {
    // console.log("props.data", this.props.data);
  }

  reduxHandlerEnhancement = () => {
    this.props.onEnhancement();
  };

  render() {
    return (
      <div>
        <h2>Items</h2>
        {this.props.data &&
          this.props.data.map(item => {
            return <li>{item}</li>;
          })}
        <h2>Mode : {this.props.mode}</h2>
        <Button onClick={this.reduxHandlerEnhancement}>
          Redux Click Enhancement
        </Button>
        {this.props.isEnhancement && <div>Enhancement Clicked</div>}
      </div>
    );
  }
}

Items.propTypes = {
  isDevelopment: PropTypes.bool,
  isEnhancement: PropTypes.bool
};

Items.defaultProps = {
  isDevelopment: false,
  isEnhancement: false
};

const mapStateToProps = (state, props) => {
  return {
    isDevelopment: state.about.isDevelopment,
    isEnhancement: state.about.isEnhancement
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDevelopment: () => {
      dispatch(setDevelopment());
    },
    onEnhancement: () => {
      dispatch(setEnhancement());
    }
  };
};
export default withLevelUp(
  withItems(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Items),
    "sinlge mode"
  )
);

// export default withItems(Items);
