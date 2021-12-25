import React from 'react'

export default function input({handleChangefile}) {
  return (
    <div>
      <input
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        onChange={handleChangefile}
        />
    </div>
  )
}
