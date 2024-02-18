import React from 'react'
import Header from './Header'
import Footer from './Footer'



export interface LayoutProps {
    children: React.ReactNode
}

function Layout(props: LayoutProps) {

    const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout