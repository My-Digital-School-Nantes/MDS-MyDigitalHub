'use client'
import { menuItems } from '@/config/site.js'
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { AcmeLogo } from './AcmeLogo.jsx'
import { ThemeSwitcher } from './ThemeSwitcher.jsx'

export function CustomNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className='font-bold text-inherit'>ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/evenements'>
            Evenements
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/joboffers'>
            Job offers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/projets'>
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/quizz'>
            Quizz
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/sante'>
            Bien être / Santé
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        session && status === 'authenticated'
          ? (
            <NavbarContent as='div' justify='end'>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='sm'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>{session.email}</p>
                  </DropdownItem>
                  <DropdownItem key='logout' color='danger' onClick={signOut}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
          : (
            <NavbarContent justify='end'>
              <NavbarItem className='hidden lg:flex'>
                <Link href='/auth/signin'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color='primary' href='/auth/signin' variant='flat'>
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
            )
      }
      <ThemeSwitcher />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
