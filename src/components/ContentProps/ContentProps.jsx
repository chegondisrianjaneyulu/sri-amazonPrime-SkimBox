import React from 'react'

export default function ContentProps(props) {
const {data} = props
const {title,content} = data
  return (
    <li>
        <h1>{title}</h1>
        <p>{content}</p>
    </li>

  )
}
