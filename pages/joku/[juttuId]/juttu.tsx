import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()
    const { juttuId } = router.query

    return (
    <div>
        <h1>Tämä on joku sivu</h1>
        <p>SIVU ID { juttuId }</p>
    </div>
    )
    
}
