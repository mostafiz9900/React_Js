
import React from 'react'

const ArrowAlert=(a) =>{
  alert(a)
}

const Arrow=()=> {
    return (
        <div>
            <button onClick={ArrowAlert.bind(this,"this is arrow functio pass data para...")} className="btn btn-warning m4" type="button">Button</button>
        </div>
    )
}

export default Arrow
