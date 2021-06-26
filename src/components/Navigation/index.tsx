import React, { memo, useState } from 'react'

// Icons
import { MdHome, MdPerson, MdMenu } from 'react-icons/md'

// Styles
import { Container, TabHeader, Tab, ContentNavigation } from './styles'

const Navigation: React.FC = () => {
  const [ tab, setTab ] = useState<number>(1)

  return (
    <Container >
      <TabHeader>
        <Tab
          className={tab === 1 ? 'tab-in-focus' : ''}
          onClick={() => setTab(1)}
        >
          <MdHome />
          Home
        </Tab>

        <Tab
          className={tab === 2 ? 'tab-in-focus' : ''}
          onClick={() => setTab(2)}
        >
          <MdPerson />
          Profile
        </Tab>

        <Tab
          className={tab === 3 ? 'tab-in-focus' : ''}
          onClick={() => setTab(3)}
        >
          <MdMenu />
          Config
        </Tab>
      </TabHeader>
      <ContentNavigation>
        {
          tab === 1 && (
            <h1>Home</h1>
          )
        }

        {
          tab === 2 && (
            <h1>Person</h1>
          )
        }

        {
          tab === 3 && (
            <h1>Config</h1>
          )
        }
      </ContentNavigation>
    </Container >
  )
}

export default memo(Navigation)
