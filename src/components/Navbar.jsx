import React, {useRef} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import { HamburgerIcon,ChevronDownIcon } from '@chakra-ui/icons';
import { IconButton,Show,Hide,useDisclosure } from '@chakra-ui/react';
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Stack,
          StackDivider,Button} from '@chakra-ui/react';
import {Menu,MenuButton,MenuList,MenuItem,MenuGroup,MenuDivider} from '@chakra-ui/react';

export default function Navbar()
{

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const linkRef = useRef();

  return(<>
    <nav className="navbar bg-[#394f8a] px-4 fixed top-0  z-50">
      <div className="flex-1 ">
        <Show below='md'>
          <IconButton className="text-white" fontWeight='extrabold' variant='outline' ref={btnRef} size='lg' colorScheme='white' onClick={onOpen} aria-label='HamburgerIcon' icon={ <HamburgerIcon/> } />
        </Show>
        <li className="btn btn-ghost normal-case text-xl font-bold text-white ml-3 " style={{fontFamily: "'Playfair Display', serif"}}>
          <NavLink end to="/" className="flex flex-row">
            <span className="iconify" data-icon="ic:baseline-coronavirus"></span><h1>Corona Tracker App</h1>
          </NavLink>
        </li>
      </div>
      <Hide below='md' className="flex-none">
          <ul className="menu menu-horizontal p-0 space-x-3" style={ {fontFamily: "'Raleway', sans-serif"} }>
            <li className="text-lg text-white hover:bg-[#0BC5EA] hover:rounded-lg">
              <NavLink end to="/">
                <span className="iconify m-0" data-icon="flat-color-icons:home"></span>
                    Home
              </NavLink>
            </li>
              <li>
               <label tabIndex="0" className="text-lg text-white hover:bg-[#0BC5EA] hover:rounded-lg">
                  Live Corona Status<ChevronDownIcon boxSize={6}  />
                </label>

                <ul className="bg-[#394f8a] p-2 ">
                    <li className="text-lg text-white hover:bg-[#0BC5EA] hover:rounded-lg"><NavLink end to="/statewise_data">IndiaCoronaLive</NavLink></li>
                    <li className="text-lg text-white hover:bg-[#0BC5EA] hover:rounded-lg"><NavLink end to="/countrywise_data">WorldCoronaLive</NavLink></li>
                </ul>
              </li>
            <li className="text-lg text-white hover:bg-[#0BC5EA] hover:rounded-lg"><NavLink end to="/about">About</NavLink></li>
          </ul>
        </Hide>
      </nav>


        <Drawer placement='left' initialFocusRef={linkRef} finalFocusRef={btnRef} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _hover={{ bg: '#0BC5EA',color:'white'}}/>
          <DrawerHeader borderBottomWidth='1px'>Corona Tracker App</DrawerHeader>
          <DrawerBody >

           <Stack direction={'column'} align={'center'} divider={<StackDivider borderColor='gray.100' />} className="space-y-4 mt-1">
            <NavLink end to="/" ref={linkRef}  onClick={onClose} >
              <Button fontSize='xl' width='15rem'  size="lg" iconSpacing="1rem" variant={'ghost'} _hover={{ bg: '#0BC5EA'}} _active={{ bg: '#570DF8', color:'white'}}>
                <span className="iconify m-0" data-icon="flat-color-icons:home"></span> Home
              </Button>
            </NavLink>
           <Menu>
            <MenuButton fontSize='xl' as={Button} variant={'ghost'} height='3rem' width='15rem'  _expanded={{ bg: '#570DF8',color:'white' }}
                          _hover={{ bg: '#0BC5EA',}} _focus={{ boxShadow: 'outline' }} >
                Live Status<ChevronDownIcon boxSize={6} pl={1} />
            </MenuButton>
              <MenuList >
                  <MenuGroup title='Indian Statewise'>
                    <MenuItem className="text-lg" _hover={{ bg: '#570DF8', color:'white'}}>
                      <NavLink end to="/statewise_data" onClick={onClose}>India Corona Live</NavLink>
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider/>
                  <MenuGroup title='Countrywise'>
                    <MenuItem className="text-lg" _hover={{ bg: '#570DF8', color:'white'}}>
                      <NavLink end to="/countrywise_data" onClick={onClose}>World Corona Live</NavLink>
                    </MenuItem>
                  </MenuGroup>
              </MenuList>
            </Menu>

            <NavLink end to="/about" onClick={onClose}>
              <Button fontSize='xl' variant={'ghost'} width='15rem' height='3rem' _hover={{ bg: '#0BC5EA'}} _active={{ bg: '#570DF8', color:'white'}}>
                About
              </Button>
           </NavLink>
          </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Outlet />
      </>);
}
