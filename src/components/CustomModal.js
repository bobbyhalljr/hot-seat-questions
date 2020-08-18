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
    Box,
    Textarea,
    Select
} from "@chakra-ui/core";
import Link from 'next/link'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

export default function CustomModal({ headerText, buttonText, inputLabel1, inputLabel2 }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [signedIn, setSignedIn] = React.useState(false)
    const [scrollBehavior, setScrollBehavior] = React.useState("inside")
    const [question, setQuestion] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [language, setLanguage] = React.useState('')
    
    const CREATE_POST = gql`
      mutation createPost($question: String!, $description: String!, $language: String){
        createPost(question: $question, description: $description, language: $language){
          id
          question
          description
          language
          authorId
          author {
            name
            jobTitle
          }
        }
      }
    `
    const [createPost, { data }] = useMutation(CREATE_POST)

    const initialRef = React.useRef();

    React.useEffect(() => {
      isOpen
    },[signedIn])
  
    return (
      <>
        <Button _hover={{ bg: 'gray.200', color: 'red.500' }} transition="all 0.4s cubic-bezier(.08,.52,.52,1)" width="90%" m={['4', '6']} p={['4', '6']} rounded='full' color='white' fontSize={['base', 'lg']} bg='red.500' onClick={onOpen}>Post A Question</Button>
        
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
          {!signedIn ?
            <ModalHeader>Create your account</ModalHeader>
            :
            <ModalHeader>Post a question</ModalHeader>
          }
            <ModalCloseButton />
            {!signedIn ? (
              <ModalBody py={10} scrollBehavior={!scrollBehavior}>
                <Box textAlign='center' my={4}>
                  <Text>Before you post</Text>
                  <Text fontSize='2xl' fontWeight='medium' mb={6}>Sign in with GitHub</Text>
                    <Button className="signInButton"
                      onClick={(e) => {
                        setSignedIn(true)
                      }}
                    >Sign in</Button>
                </Box>
              </ModalBody>
              )
              :
              (
                <>
              <ModalBody mb={6}>
                <Text mb={4} fontSize='xl' fontWeight='medium' my={8}>{`Hello!  , We Hope you crushed your interview!`}</Text>
                
                <form onSubmit={(e) => {
                  e.preventDefault()
                  createPost({
                    variables: {
                      question: question,
                      description: description,
                      language: language,
                    }
                  })
                  console.log({ data })
                  setQuestion('')
                  setDescription('')
                  setLanguage('')
                }}>
                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Question</FormLabel>
                    <Input onChange={e => setQuestion(e.target.value)} value={question} shadow='md' variant='outline' name='title' placeholder="How to reverse a linked list..." />
                  </FormControl>

                  <FormControl mt={6} isRequired>
                    <FormLabel mb={2}>Description</FormLabel>
                    <Textarea onChange={e => setDescription(e.target.value)} value={description} shadow='md' variant='outline' name='description' placeholder="Crushed that interview !" />
                  </FormControl>

                  <FormControl mt={6}>
                    <FormLabel mb={2}>What language did you use?:</FormLabel>
                    <Select onChange={e => setLanguage(e.target.value)} value={language} shadow='md' name='language' variant="outline" placeholder="JavaScript, Python, Java, etc...">
                      <option value="JAVASCRIPT">JavaScript</option>
                      <option value="PYTHON">Python</option>
                      <option value="JAVA">Java</option>
                      <option value="C">C</option>
                      <option value="CPLUSPLUS">C++</option>
                      <option value="CSHARP">C#</option>
                      <option value="GO">GO</option>
                      <option value="TYPESCRIPT">TypeScript</option>
                    </Select>
                  </FormControl>
                  <Box d='flex' justifyContent='flex-end' pt={8}>
                    <Button mr={3} onClick={onClose}>Cancel</Button>
                    <Button type='submit' variantColor="blue">
                      Post
                    </Button>
                  </Box>
                </form>
              </ModalBody>
            </>
            )}
  
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