import React from 'react'

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      The ID of this page is {props.match.params.id}
    </div>
  )
}

export default EditExpensePage;