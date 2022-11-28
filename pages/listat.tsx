import Link from 'next/link';

import {Page} from '@/components/Page';
import {GetServerSideProps} from 'next';
import {ShopList} from '@/utils/types';
import { callApi } from '@/utils/apicall';

type PropsType = {
    listat: ShopList[];
};

export default function ListatSivu({listat}: PropsType) {
    function ListaListItem({id, name}: {id: number; name: string}) {
        return (
            <li>
                <Link href={`/lista/${id}`}>
                    ({id}) {name}
                </Link>
            </li>
        );
    }

    return (
        <Page title="Listat">
            <ul>
                {listat.map((lista) => (
                    <ListaListItem key={lista.id} id={lista.id} name={lista.name} />
                ))}
            </ul>
        </Page>
    );
}

export const getServerSideProps: GetServerSideProps<PropsType> = async (
    context
) => {
    const listat: ShopList[] = await callApi(context.req, '/api/listat')

    return {
        props: {listat},
    };
};

