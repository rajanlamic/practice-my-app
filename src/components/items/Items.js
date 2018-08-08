import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { setDevelopment, setEnhancement } from "./items-actions";
import { connect } from "react-redux";

export class Items extends React.Component {
  reduxHandlerDevelopment = () => {
    this.props.onDevelopment();
  };

  reduxHandlerEnhancement = () => {
    this.props.onEnhancement();
  };

  render() {
    return (
      <div>
        <h2>Items</h2>
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

const mapStateToProps = state => {
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
