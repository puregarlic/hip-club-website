import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Link as NavLink } from 'rebass'

export const NavBar = () => (
  <Flex py={6}>
    <Flex width={[1, null, 1 / 3]} justifyContent="space-around">
      <Box>
        <Heading>OSU Entrepreneurship Club</Heading>
      </Box>
    </Flex>
    <Flex width={[1, null, 2 / 3]} justifyContent="space-evenly" alignItems="center">
      <NavLink>
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link to="/about">About</Link>
      </NavLink>
      <NavLink>
        <Link to="/events">Events</Link>
      </NavLink>
      <NavLink>
        <Link to="/contact">Contact</Link>
      </NavLink>
    </Flex>
  </Flex>
)
