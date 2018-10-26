import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export class Hello extends React.Component {
  render() {
    console.log('rendering', this.props);
    return (
      <div>
        <button onClick={() => this.forceUpdate()}>force rerender</button>
        <p>
          Passed name is <span className="value">{this.props.value.name}</span>
          <small>
            <i style={{ color: '#979797' }}>
              {' <--'} doesn't change when it should
            </i>
          </small>
        </p>
      </div>
    );
  }
}

Hello.propTypes = propTypes;
