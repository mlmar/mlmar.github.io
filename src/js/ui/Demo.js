import React from 'react';

/* Floating Demo component
 *    {description}  : text in the title bar
 *    {onClose}      : action to close the demo
 *    {children}     : content of the demo component
 */
function Demo({ description, onClose, children }) {
  return (
    <div className="demo fade-fast">
      <span className="bar">
        <label className="small max-width"> {description} </label>
        <button onClick={onClose}> x </button>
      </span>
      <div className="item">
        {children}
      </div>
    </div>
  )
}

export default Demo;