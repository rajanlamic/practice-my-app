import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAtlantic, setPacific } from "./home-actions";

export class Home extends React.Component {
  pacificHandler = () => {
    this.props.setPacific();
  };

  atlanticHandler = () => {
    this.props.setAtlantic();
  };

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button onClick={this.pacificHandler}>Pacific Home </Button>
        {this.props.isAtlantic && <div>Atalantic Clicked </div>}
        <Button onClick={this.atlanticHandler}>Atlantic Home </Button>
        {this.props.isPacific && <div>Pacific Clicked </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAtlantic: state.home.isAtlantic,
    isPacific: state.home.isPacific
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAtlantic: setAtlantic,
      setPacific: setPacific
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
