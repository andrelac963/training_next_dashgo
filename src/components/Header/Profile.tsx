import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Luiz</Text>
          <Text color="gray.300" fontSize="small">
            andrelac963@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="André Luiz"
        src="https://github.com/andrelac963.png"
      ></Avatar>
    </Flex>
  )
}
