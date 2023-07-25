'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>This is home</div>
      <Link href="/clients"> Go to Clients</Link>
      <Link href="/services"> Go to Services</Link>
      <Link href="/free-estimate"> Go to Free Estimate</Link>
    </>
  );
}
