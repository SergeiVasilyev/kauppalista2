import {FC, ReactNode} from 'react'
import NavigationBar from './NavigationBar';

// function Layout2 ({ children }: {children: ReactNode}) {
//     return <div></div>
// }


const Layout: FC<{children: ReactNode}> = ({ children }) => {
    return (
    <>
        
        <NavigationBar />
        <main>{children}</main>
    </>
    )
}
export default Layout


