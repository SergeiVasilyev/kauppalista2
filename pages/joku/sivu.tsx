import Link from 'next/link'
import { Button } from 'react-bootstrap'


export default function Page() {
    return (
    <div>
        <h1>Tämä on joku sivu</h1>
        <p>SIVU 1</p>
        
        <Link href="/joku/juttu3/toinen4">
            <Button>Juttu kolmonen kohdasta 4</Button>
        </Link>
        
    </div>
    )
}