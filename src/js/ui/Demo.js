import React from 'react';

/* Floating Demo component
 *    {onClose}      : action to close the demo
 *    {children}     : content of the demo component
 */
function Demo({ className, onClose, children }) {
  return (
    <div className="flex center blur fade-fast"> 
      <div className="close" onClick={onClose}/>
      <div className={`demo ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Demo;