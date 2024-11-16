import { AppLayout } from "@/layouts/AppLayout"
import { Box, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function QuestId() {
  const router = useRouter()

  return (
    <AppLayout>
      <Box mb={100}>
        <Heading>Quest ID</Heading>
      </Box>
    </AppLayout>
  )
}