import Link from 'next/link'

export default function Navbar() {
  const pages = [
    {
      name: 'Home',
      href: '/home',
    },
    {
      name: 'Programs and Events',
      href: '/programs',
    },
    {
      name: 'Gallery',
      href: '/gallery',
    },
    {
      name: 'About Us',
      href: '/about',
    },
  ]

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
