import React from 'react'

import Header from "../Shared/components/Header"

const LayoutPrivado = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default LayoutPrivado
