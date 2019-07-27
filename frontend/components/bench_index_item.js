import React from "react";

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description } = this.props.bench;
    return (
      <div>
        <div>
          <p>Description: {description}</p>
        </div>
      </div>
    );
  }
}

export default BenchIndexItem;
