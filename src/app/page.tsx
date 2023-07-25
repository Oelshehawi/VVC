import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>This is home</div>
      <Link href="/clients"> Go to Clients</Link>
    </>
  );
}
