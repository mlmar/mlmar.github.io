import React, { useState } from 'react';

/*  DropDown fade in/out toggled by pressing on a label
 *    {description}  : label text
 *    {children}     : elements to be toggled
 *
 *    css located under .dropdown in main.css
 */
function DropDown({ description, alt, children }) {
  const [ hidden, setHidden] = useState(true);
  const [ itemClass, setItemClass ] = useState("");

  const toggle = () => {
    if(hidden) {
      setHidden(false);
      setItemClass(""); // start reverse animation
    } else {
      setItemClass("reverse"); // start reverse animation
      setTimeout(() => { // change state while animating
        setHidden(true);
      }, 300);
    }
  }

  // use alt descripton when visible if present
  const text = !hidden && alt ? alt : description;

  return (
    <div className="dropdown">
      <label className="small" onClick={toggle}> {text} </label>
      { !hidden &&
        <div className={`item ${itemClass}`}>
          {children}
        </div>
      }
    </div>
  )
}

export default DropDown;