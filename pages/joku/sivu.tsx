import Link from 'next/link'


export default function Page() {
    return (
    <div>
        <h1>Tämä on joku sivu</h1>
        <p>SIVU 1</p>

        <Link href="/joku/juttu3/toinen4">Juttu kolmonen kohdasta 4</Link>
    </div>
    )
}