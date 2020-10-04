import React from 'react';

/* Floating Demo component
 *    {onClose}      : action to close the demo
 *    {children}     : content of the demo component
 */
function Demo({ className, onClose, children }) {
  return (
    <div className="blur fade-fast"> 
      <div className="close" onClick={onClose}/>
      <div className="demo">
        <div className={`item ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Demo;