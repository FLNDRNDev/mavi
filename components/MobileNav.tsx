'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'  


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src='/icons/hamburger.svg' 
                        alt='Hamburger icon' 
                        width={20} 
                        height={20} 
                        className='cursor-pointer'
                    />
                </SheetTrigger>

                <SheetContent 
                    side='left'
                    className='border-none bg-white'
                >
                    <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2 px-4'>
                        <Image 
                            src='/icons/Logo.svg'
                            alt='mavi Finans logo'
                            width={48}
                            height={48}
                        />
                        <h2 className='text-16 font-ibm-plex-serif font-light text-black-1'>mavi finans</h2>
                    </Link>

                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-5 pt-14'>
                                { sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`); 

                                return (
                                    <SheetClose asChild key={item.route}>
                                        <Link 
                                            href={item.route}
                                            key={item.label}
                                            className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient' : isActive})}
                                        >
                                            
                                            <Image 
                                                src={item.imgURL}
                                                alt={item.label}
                                                width={20}
                                                height={20}
                                                className={cn({'brightness-[3] invert-0' : isActive})}
                                            />

                                            <p className={cn('text-12 font-light text-black-2', {'text-white' : isActive})}>
                                                {item.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}

                            User
                            </nav>    
                        </SheetClose>

                        Footer
                    </div>
                    
                </SheetContent>
            </Sheet>

        </section>
    );
}

export default MobileNav;
