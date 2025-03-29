import { Button } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../theme/colors'

function CustomButton({title}) {
  return (
    <>
       <Button
          borderRadius={50}
          backgroundColor={colors.bg.accent}
          color={colors.text.secondary}
          _hover={{ bg: "rgba(102, 0, 51, 0.75)" }}
        >
          {title}
        </Button>
    </>
  )
}

export default CustomButton
