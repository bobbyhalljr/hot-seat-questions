import React, { useState } from 'react'
import Link from 'next/link'

import { 
    Box, 
    Heading, 
    Flex, 
    Text, 
    Button, 
    useColorMode,  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Link as ChakraLink,
    Stack
    } from "@chakra-ui/core";
    import { DarkModeSwitch } from './DarkModeSwitch'
    import theme from '../theme'

const MenuItems = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} m={2} display='flex' justifyContent='center' fontSize='xl' fontWeight='semibold' p={2}>
      {children}
    </Text>
  );

const Navbar = (props) => {

    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("right");
    const handlePlacementChange = event => setPlacement(event.target.value);

    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.200", dark: "gray.700" };
    const color = { light: "black", dark: "white" };

    const largeScreens = theme.breakpoints[2]

    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="nowrap"
        padding={2}
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        w='full'
        position='fixed'
        zIndex='100'
        {...props}
        >

        <Link href='/' as ='/'>
            <a>
                <Text fontWeight='bold' whiteSpace='nowrap' fontSize={['md', '3xl']} mr={12} ml={2}>
                    Hot Seat Questions 🔥
                </Text>
            </a>
        </Link>
        <Box display={['none', 'none', 'inline-block']}>
            <Box display='flex'>
                <Box d='flex' ml={48} alignItems='center' fontWeight='semibold' fontSize='xl'>
                    <Link href='/questions' as='/questions'>
                        <a>
                            <MenuItems>
                                Questions
                            </MenuItems>
                        </a>
                    </Link>
                    {/* <Link href='/about' as='/about'>
                        <a>
                            <MenuItems>
                                About
                            </MenuItems>
                        </a>
                    </Link> */}
                    {/* <Box ml={4}>
                        <Button>
                            Sign In
                        </Button>
                    </Box> */}
                </Box>
            </Box>
        </Box>

        <Box display='flex' justifyContent='flex-end' mr={4}>
            <DarkModeSwitch />
            <Button variantColor="gray" onClick={onOpen}>
                <svg
                fill={color[colorMode]}
                width="22px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Button>
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton mt='7px' border='1px solid '/>
            <DrawerHeader borderBottomWidth="1px" >
                <Link href='/' as='/'>
                    <a>
                        Hot Seat Questions 🔥
                    </a>
                </Link>
                </DrawerHeader>
            <DrawerBody>
                <Stack spacing={6} mt={4}>
                    <Link href='/questions' as='/questions'>
                        <a>
                            <MenuItems>
                                Questions
                            </MenuItems>
                        </a>
                    </Link>
                    {/* <Link href='/about' as='/about'>
                        <a>
                            <MenuItems>
                                About
                            </MenuItems>
                        </a>
                    </Link> */}
                </Stack>
                {/* <Box mt={6} display='flex'  justifyContent='space-around'>
                    <Button>
                        Sign In
                    </Button>
                </Box> */}
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Flex> 
    )
}

export default Navbar