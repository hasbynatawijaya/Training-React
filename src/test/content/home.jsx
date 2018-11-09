import React from 'react'

const home = ({history}) => {
  return (
    <div>
      <h2>Welcome</h2>
      <div onClick={() => history.push('/view')}>
        Click Heres
      </div>
    </div>
  )
}

export default home
