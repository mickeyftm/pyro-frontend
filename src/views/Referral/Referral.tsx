import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pyroswap/uikit'
import Page from 'components/layout/Page'
import TotalReferrals from 'views/Referral/components/TotalReferrals'
import TotalCommissions from 'views/Referral/components/TotalCommissions'
import ReferralLink from 'views/Referral/components/ReferralLink'
import Hero from './components/Hero'



const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`


const Referral: React.FC = () => {

  return (
    <>
    <Hero />
    <Page>

      <div>
        <Cards>
          <TotalReferrals />
          <TotalCommissions />
        </Cards>

          <ReferralLink />



      </div>
    </Page>
    </>
  )
}

export default Referral
