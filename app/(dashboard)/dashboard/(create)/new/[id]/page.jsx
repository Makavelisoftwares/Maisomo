import React from 'react'
import { CreatedCourse } from '../../_components/CreatedCourse'

function CreatetedCoursePage({params}) {


  return (
    <div>
      <CreatedCourse id={params.id}/>
    </div>
  )
}

export default CreatetedCoursePage