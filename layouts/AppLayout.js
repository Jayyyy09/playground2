import { Box } from "@chakra-ui/react"
import { useTelegramLogin } from "@xw3/maki"
import { motion } from "framer-motion"
import { AppHeader } from "./AppHeader"
import { GramLayout } from "@/components/GramLayout"
import { FixedHeader } from "@/components/FixedHeader"
import { FixedFooter } from "@/components/FixedFooter"
import { NavBar } from "@/components/NavBar"
import { TbBuildingCircus, TbShoppingBag, TbSparkles, TbUsers } from 'react-icons/tb'

export const AppLayout = ({ children, footer }) => {
  useTelegramLogin()

  const navs = [
    {
      key: 'home',
      url: '/',
      label: 'Home',
      icon: <TbBuildingCircus fontSize={24} />
    },
    {
      key: 'quests',
      url: '/quests',
      label: 'Campaigns',
      icon: <TbSparkles fontSize={24} />
    },
    {
      key: 'shop',
      url: '/shop',
      label: 'Shop',
      icon: <TbShoppingBag fontSize={24} />
    },       
    {
      key: 'frens',
      url: '/frens',
      label: 'Frens',
      icon: <TbUsers fontSize={24} />
    },
  ]  

  return (
    <GramLayout>
      <FixedHeader backdropFilter="blur(30px)">
        <AppHeader />
      </FixedHeader>
      <Box bg="white" as={motion.div} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} px={6} _dark={{ bg: 'black' }}> 
        { children }
      </Box>
      <FixedFooter>
        { footer && footer }
        <NavBar 
          navs={navs}
          />
      </FixedFooter>
    </GramLayout>
  )
}
