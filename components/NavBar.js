import { Box, HStack, VStack, Text, useColorMode } from "@chakra-ui/react"
import { useTelegram } from '@xw3/maki'
import { useRouter } from 'next/router'

export const NavButton = ({ nav, active = false, theme, ...rest }) => (
  <VStack 
    py={2}
    _hover={{ bg: 'whiteAlpha.50', ...theme?.navActive }}
    cursor="pointer"
    key={nav?.key} 
    w="full"
    spacing={1}
    {...theme?.nav}
    {...(active && theme?.navActive)}
    {...rest}>
    { nav?.icon && nav?.icon }
    { nav?.label && <Text fontSize="xs" {...theme?.navLabel} {...nav?.theme?.label}>{nav?.label}</Text> }
  </VStack>
)

const isActive = (url, path, urls = []) => {
  if (urls.length > 0) {
    return urls.indexOf(path) > -1
  }
  return url == path
}

export const NavBar = ({ navs = [], theme, onAction }) => {
  const router = useRouter()
  const tg = useTelegram()

  const handleAction = ({ url, disabled, onClick }) => {
    tg.haptic()
    tg.hideBackButton()

    if (onClick) {
      onClick()
      return
    }

    if (!!disabled) return

    if (url.startsWith(':')) {
      try {
        const name = url.replace(':', '')
        console.log("CALLED FUNCTION", name)
        onAction && onAction(name)
      } catch (e) {
        console.log("TABBAR: Failed Action Call", e)
      }
    } else if (url.startsWith('/')) {
      router.replace(url)
    } else if (url.startsWith('http')) {
      (window || global?.window)?.open(url, '_blank')
    } else if (url.startsWith('colorMode')) {
      useColorMode().toggleColorMode()
    }
  }    

  return (
    <Box {...theme?.navs}>
      <HStack gap={0} {...theme?.navStack}>
      { 
          (navs || []).map(nav => <NavButton
            nav={nav} 
            key={nav?.key} 
            icon={nav?.renderIcon}
            theme={theme}
            active={isActive(nav?.url, router?.asPath, nav?.urls || [])}
            onClick={() => handleAction(nav)}
            />
          )
        }        
      </HStack>
    </Box>
  )
}