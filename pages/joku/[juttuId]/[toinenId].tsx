import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button } from 'react-bootstrap'


export default function Post() {
    const router = useRouter()
    const { juttuId, toinenId } = router.query

    console.log(router.query)

    return (
    <div>
        <h1>Tämä on joku sivu</h1>
        <p>SIVU ID { juttuId } { toinenId }</p>
        
        <Link href="/joku/sivu/">
            <Button>seege</Button>
        </Link>
        
    </div>
    )
    
}
