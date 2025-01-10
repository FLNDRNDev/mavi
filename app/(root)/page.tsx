import React from 'react'

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
const loggedIn = { firstName: 'Doron', lastName: 'Van Cutsem', email: 'doron@mavi.eu' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcone'
            user={ loggedIn?.firstName || 'Guest' }
            subtext='Access and mange your accounts and transactions efficiently.'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2333.14}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2333.14 }, { currentBalance: 2551.57 }]}
      />
    </section>
  )
}

export default Home