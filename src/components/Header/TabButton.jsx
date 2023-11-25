import React from 'react'

export default function TabButton({id,children}) {
  let target= '#' + id;
  return (
    <li><a href={target}><button>{children}</button></a></li>
  )
}
