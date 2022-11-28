import Link from 'next/link'
import { useRouter } from 'next/router'
import { Page } from '@/components/Page'


export default function Post() {
    const router = useRouter()
    const {listId} = router.query

    return (
        <Page title={`Lista: ${listId}`}>
            <div>TODO: sisältö</div>
        </Page>
    )
    
}


