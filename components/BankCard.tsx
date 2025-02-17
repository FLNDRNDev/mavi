import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { formatAmount } from '@/lib/utils';


const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link
            href={`/bank/${account.id}`}
            className='bank-card'
        >
            <div className='bank-card_content'>
                <div>
                    <h2 className='text-14 font-semibold text-white'>{account.name || userName}</h2>
                    <p className='font-ibm-plex-sans font-black text-white'>{formatAmount(account.currentBalance)}</p>
                </div>

                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-12 font-light text-white'>
                            { userName }
                        </h1>
                        <h2 className='text-12 font-light text-white'>
                        ●● / ●●
                        </h2>
                    </div>

                    <p className='text-14 font-normal tracking-[1.1px] text-white'>
                    ●●●● ●●●● ●●●● <span className='text-14'>1234</span>
                    </p>
                </article>
            </div>

            <div className='bank-card_icon'>
                <Image 
                    src='/icons/Paypass.svg'
                    width={20}
                    height={24}
                    alt='Pay'
                />

                <Image 
                    src='/icons/mastercard.svg'
                    width={45}
                    height={32}
                    alt='mastercard'
                    className='ml-5'
                />
            </div>

            <Image 
                src='/icons/lines.svg'
                width={316}
                height={190}
                alt='lines'
                className='absolute top-0 left-0'
            />
        </Link>

        {/* Copy Card Numbers */}
    </div>
  );
}

export default BankCard;
