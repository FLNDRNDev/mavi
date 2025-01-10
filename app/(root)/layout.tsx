import Image from "next/image";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Doron', lastName: 'Van Cutsem' };

  return (
    <main className='flex h-screen w-full font-inter'>
      {/* Sidebar */}
      <Sidebar user={loggedIn} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image 
            src='/icons/Logo.svg'
            alt='menu icon'
            width={30}
            height={30}
          />
          
          <div className=''>
            <MobileNav user={loggedIn} />
          </div>  
        </div>

          {children}
      </div>
    </main>
  );
}
