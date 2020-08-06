import {
  
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Box
} from "@chakra-ui/core";

export default function CustomModal({ headerText, buttonText, inputLabel1, inputLabel2 }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef();
    const finalRef = React.useRef();
  
    return (
      <>
        <Button _hover={{ bg: 'gray.200', color: 'red.500' }} transition="all 0.4s cubic-bezier(.08,.52,.52,1)" width="90%" m={['4', '6']} p={['4', '6']} rounded='full' color='white' fontSize={['base', 'lg']} bg='red.500' onClick={onOpen}>Post A Question</Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <Box textAlign='center'>
                <Text fontSize='2xl' fontWeight='medium' mb={6}>Sign in with GitHub</Text>
                <Button width='50%' border='1px solid white'>Sign In</Button>
              </Box>
            {/*  <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl> */}
            </ModalBody>
  
            {/* <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    );
  }