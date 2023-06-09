import { Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { useTimeoutFn } from 'react-use'

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isReady, cancel, reset] = useTimeoutFn(() => setIsOpen(true), 1000)

  console.log('from popup')
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {isOpen ? (
          <>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-70"
              leave="ease-in duration-200"
              leaveFrom="opacity-70"
              leaveTo="opacity-0"
            >
              <div className={`fixed inset-0 bg-gray-500 `}></div>
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="relative transform overflow-hidden rounded-lg bg-white  shadow-xl flex flex-col items-center gap-6 sm:w-full sm:max-w-md p-8 pt-10  ">
                    <div
                      onClick={() => setIsOpen(false)}
                      className=" absolute cursor-pointer top-3 right-5 "
                    >
                      <svg
                        height="20px"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="20px"
                        xmlSpace="preserve"
                        fill="darkGray"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                      </svg>
                    </div>
                    <img
                      src="https://preview.redd.it/a-lo-i-worlds-1st-changeable-ai-nft-v0-tx3cepnlvcha1.png?width=640&crop=smart&auto=webp&s=166307cdd610c59c6959b86990bba29ea28fbae4"
                      alt="Cover"
                      width={150}
                      height={150}
                    ></img>
                    <div className=" flex flex-col gap-3 pt-3 w-full">
                      <h3
                        className="text-center text-2xl font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Claim your NFT
                      </h3>

                      <p className="text-sm text-center text-gray-500">
                        Claim it to unlock future discounts and experiences!
                      </p>
                      <input
                        aria-label="email"
                        placeholder="Enter email"
                        type="email"
                        className=" w-full border px-4 py-3 text-sm rounded-full "
                        onChange={e => setEmail(e.target.value)}
                      ></input>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex justify-center bg-blue-600 transition-all px-3 py-3 text-sm rounded-full font-semibold text-white shadow-sm hover:bg-blue-500 w-full"
                    >
                      Submit
                    </button>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Transition.Root>
  )
}

export default App
