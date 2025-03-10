import React from 'react'
import { useState } from 'react';
const useDisclosure = () => {

  const [isopen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    { onClose, onOpen, isopen }
  )

}

export default useDisclosure