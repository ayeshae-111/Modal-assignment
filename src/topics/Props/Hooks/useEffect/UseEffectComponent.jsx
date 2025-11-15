import React, {useEffect} from 'react'

function UseEffectComponent() {
  useEffect(() =>{
    console.log("Component Rendered here");
});
console.log("Logic rendered here");
  return (
    <div>
      <h1>UseEffect Component</h1>
    </div>
  )
}

export default UseEffectComponent;