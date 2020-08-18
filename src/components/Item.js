import React from 'react'

const Item = ({status, textColor}) => (

    <p style={{ color: textColor}}>Item A {status}</p>
)

export default Item;