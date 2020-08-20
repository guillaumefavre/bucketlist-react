import React from 'react'

const Item = ({label, status, textColor}) => (

    <p style={{ color: textColor}}>{label}</p>
)

export default Item;