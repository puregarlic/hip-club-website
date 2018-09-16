import React from 'react'
import { Flex, Card, Heading } from 'rebass'

import header from './header.png'

export const Home = () => (
  <div>
    <Card
      p={7}
      py={9}
      mx={5}
      backgroundImage={`url(${header})`}
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      color="white"
      bg="darkGrey"
    >
      <Heading fontSize={6} textAlign="center">
        Learn Entrepreneurial Skills and Enjoy Professional Networking Events
      </Heading>
    </Card>
  </div>
)
