import React from 'react'

import AnimatedCounter from './AnimatedCounter'
import DoughnutCart from './DoughnutCart'


const TotalBalanceBox = ({
    accounts = [],
    totalBanks ,
    totalCurrentBalance
}: TotalBalanceBoxProps ) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutCart accounts={accounts} />
        </div>
        <div className='flex flex-col gap-5'>
            <h2 className='header-2'>
                <span className='text-16'>Bank Accounts: </span>{totalBanks}
            </h2> 

            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>

                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox