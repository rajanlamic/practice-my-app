import React from "react";

const withLevelUp = WrappedComponent => {
  return class mycompont extends React.Component {
    render() {
      return <WrappedComponent level="Level Up" />;
    }
  };
};

export default withLevelUp;
