import React from 'react';

const styleBackground = (InnerComponent) => {
  class WrapperComponent extends React.Component {
    render() {
      return (
        <div className="bg-sky-300">
          <InnerComponent {...this.props} propTambahan="hola"/>
        </div>
      );
    }
  }

  return WrapperComponent;
}

export default styleBackground;
