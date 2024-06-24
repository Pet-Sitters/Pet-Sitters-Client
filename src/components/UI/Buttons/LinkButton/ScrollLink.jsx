import React from 'react';
import { Link } from 'react-router-dom';

const ScrollLink = React.forwardRef((props, ref) => {
  return <Link {...props} ref={ref} onClick={() => window.scrollTo(0, 0)} />;
});

export default ScrollLink;
