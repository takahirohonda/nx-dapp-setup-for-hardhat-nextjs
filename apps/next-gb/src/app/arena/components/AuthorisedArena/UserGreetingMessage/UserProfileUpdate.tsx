'use client'

import { useDisclosure } from '@nextui-org/react'
import { GradientButton } from 'ui-components'
import { UserProfileUpdateModal } from './UserProfileUpdate/UserProfileUpdateModal'

export const UserProfileUpdate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <GradientButton variant="secondary" onClick={onOpen}>
        Update your profile
      </GradientButton>
      <UserProfileUpdateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}