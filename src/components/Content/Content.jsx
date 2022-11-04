import React from 'react'
import ContentProps from '../ContentProps/ContentProps'

export default function Content() {
 const data = [
    {id:1,title:'t1',content:'t1'},
    {id:2,title:'t2',content:'t2'},
    {id:3,title:'t3',content:'t3'},
    {id:4,title:'t4',content:'t4'}
]
  return (
   <ul>
    {data.map(contentData => (
        <ContentProps key={contentData.id} data={contentData}/>
    ))}
   </ul>
  )
}
