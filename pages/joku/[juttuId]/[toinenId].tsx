import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Post() {
    const router = useRouter()
    const { juttuId, toinenId } = router.query

    console.log(router.query)

    return (
    <div>
        <h1>Tämä on joku sivu</h1>
        <p>SIVU ID { juttuId } { toinenId }</p>
        <Link href="/joku/sivu/"></Link>
    </div>
    )
    
}
