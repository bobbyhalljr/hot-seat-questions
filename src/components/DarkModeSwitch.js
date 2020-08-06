import { useColorMode, Icon, Button } from '@chakra-ui/core'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
    {colorMode === "dark" ?
    <Button onClick={toggleColorMode}
    position="fixed"
    top="1rem"
    right="2rem"
    >
      {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
      <Icon name='sun'
        color="green"
      />
    </Button>
    : 
    <Button onClick={toggleColorMode}
    position="fixed"
    top="1rem"
    right="2rem"
    >
        {/* Toggle {colorMode === "light" ? "Dark" : "Light"} */}
        <Icon name='moon'
          color="green"
        />
      </Button>
    }
    </>
  )
}
