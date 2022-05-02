import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export default function Widget() {

  return (
    <Popover className="fixed bottom-6 right-6">
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button 
        className="flex items-center justify-center bg-brand-500 rounded-full px-3 h-12 text-white group"
        >
        <ChatTeardropDots className='w-6 h-6'/>
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
