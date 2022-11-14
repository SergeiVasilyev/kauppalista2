import {FC, ReactNode} from 'react'
import { NavBar } from './NavBar';

// function Layout2 ({ children }: {children: ReactNode}) {
//     return <div></div>
// }


const Layout: FC<{children: ReactNode}> = ({ children }) => {
    return (
    <>
        
        <NavBar />
        <main>{children}</main>
    </>
    )
}
export default Layout


