import { useState } from 'react';

export default function useToggle(defaultValue) {

  const [value, setValue] = useState(defaultValue)  

  function toggleValue(value){
    console.log('toogle value')
    setValue(currentValue => 
      typeof value === "boolean" ? value : !currentValue  
    )
  }

  return [value, toggleValue]

}
