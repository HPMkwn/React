import React from "react";

const Counter = WrappedComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    countHandler = () => {
      this.setState((prevStat) => {
        return { count: prevStat.count + 1 };
      });
      console.log(this.state.count);
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          countHandler={this.countHandler}
          name={this.props.name}
        />
      );
    }
  }
  return NewComponent;
};

export default Counter;
