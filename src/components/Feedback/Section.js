import React from "react";
import PropTypes from 'prop-types'; 

function Section({ title, children }) {
    return (
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    );
  };

  Section.prototype={
    title:PropTypes.string,
  }

  export default Section;