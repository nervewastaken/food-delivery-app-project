import Link from 'next/link'

export default function Header(){
    return(
    <header className="flex items-center justify-between">
      <Link className="text-red-600 font-semibold 2xl" href="/">Little Sweet with Luv</Link>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/aboutus'}>About</Link>
        <Link href={'/contact'}>Contact</Link> 
        <Link href={'/admin'}>Admin</Link>
  
      </nav>
    </header>
    );
}