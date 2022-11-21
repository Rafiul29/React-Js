import React from 'react'
import ErrorBounderies from './ErrorBounderies';
import Jursey from './Jursey'

const JurseyMacker = () => {
  return (
    <div>
      <ErrorBounderies>
      <Jursey name="Messi" number={10}/>
      </ErrorBounderies>
      <ErrorBounderies>
      <Jursey name="Rafiul" number={9}/>
      </ErrorBounderies>
      <ErrorBounderies>
      <Jursey name="Rahman" number={11}/>
      </ErrorBounderies>
      <ErrorBounderies>
      <Jursey number={10}/>
      </ErrorBounderies>
    </div>
  )
}

export default JurseyMacker;