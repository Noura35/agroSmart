import React from 'react'
import classnames from 'classnames'

function Inputs({label, type, name, placeholder, onChangeHandler, errors, value}) {
  return (
    <div className="mb-3">
    
      <input type={type} value={value} placeholder={placeholder} className={(classnames("form-control", {"is-invalid": errors}))}  name={name} onChange={onChangeHandler}/>
    {
      errors && (<div class="invalid-feedback">
      {errors}
    </div>)
    }
  </div>
  )
}

export default Inputs