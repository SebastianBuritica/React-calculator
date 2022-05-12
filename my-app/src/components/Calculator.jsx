import React, { useState } from 'react'

const Calculator = () => {
  
    const [val, setVal] = useState('')

    return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="display-5 fw-bolder text-center text-primary">Calculator</h1>
                <hr />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                <div className="card border-primary mb-3" >
                    <div className="card-body text-primary">
                    <input 
                        type="text" 
                        className='form-control from-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' 
                        value={val} 
                     />
                     <div className="row">
                         <div className="col-3">
                             <button 
                             className="btn btn-light text-primary shadow p-4 fs-4"
                             value={1}
                             onClick={(e) => setVal(val + e.target.value)}
                             >
                                 1
                             </button>
                         </div>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculator