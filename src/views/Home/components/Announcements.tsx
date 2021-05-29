import React from 'react'
import { Card, CardBody, Heading } from '@pyroswap/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Announcements')}
        </Heading>
        <Row>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'TwitterDev',
            }}
            options={{ theme: 'dark', chrome: "noheader, nofooter, transparent", width: '700', height: '300' }}
          />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
