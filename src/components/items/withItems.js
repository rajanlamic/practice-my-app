import React from "react";

const withItems = (WrappedComponent, mode) => {
  return class mycompont extends React.Component {
    componentDidMount() {
      console.log("level", this.props.level);
    }
    getMode() {
      return mode;
    }
    getData = () => {
      return ["first", "second", "third", "fourth", "fiveth"];
    };
    render() {
      return <WrappedComponent mode={this.getMode()} data={this.getData()} />;
    }
  };
};

export default withItems;
