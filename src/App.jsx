import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div class="container">
    <div className="columns-2">
    <div className=" p-8 bg-white rounded-2xl shadow shadow-inner flex-col justify-start items-start gap-4 inline-flex">
    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex">
        <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[30px] h-[30px] bg-pink-800 rounded-full" />
            <div className="text-stone-600 text-sm font-normal leading-normal ">Intellectual Property</div>
        </div>
        <div className="self-stretch h-[148px] py-4 border-b border-stone-600 border-opacity-30 flex-col justify-start items-start gap-2 flex">
            <div className="text-stone-600 text-sm font-normal leading-normal ">User Login</div>
            <div className="w-[432px] text-stone-600 text-4xl text-left font-semibold ">Millions of Quality Resources</div>
        </div>
        <div className="self-stretch h-[200px] py-4 flex-col justify-start items-start gap-4 flex">
        <Input fullWidth size="md" className="h-[60px] rounded-lg" label="Email/ Username" />
        <Input fullWidth size="md" className="h-[60px] rounded-lg" label="Password" icon={<i className="fas fa-heart" />} />
        <div className="w-full justify-between items-center inline-flex">
        <div><Checkbox label="Remember Me" /></div>
        <div className="text-stone-600 font-semibold ">Forget Password ?</div>
      </div>
    </div>
    <Button fullWidth className="h-[50px] bg-stone-600 rounded-xl text-center" >Login</Button>
    <div className="inline-flex gap-1">
      <div className="text-stone-600 text-sm ">No account yet ?</div>
      <div className="text-stone-600 text-sm font-semibold ">Registered</div>
    </div>
    </div>
    <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="justify-start items-start gap-2 inline-flex">
      <div className="p-2 bg-pink-800 rounded-[50px] gap-2 flex">
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 p-0.5 left-0 top-0 absolute justify-center items-center inline-flex">
            <img className="w-5 h-5" src="src/assets/fb.svg" />
          </div>
        </div>
      </div>
      <div className="p-2 bg-pink-800 rounded-[50px]  gap-2 flex">
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 p-px left-0 top-0 absolute justify-center items-center inline-flex">
            <img className="w-[22px] h-[22px]" src="src/assets/ig.svg" />
          </div>
        </div>
      </div>
      <div className="p-2 bg-pink-800 rounded-[50px]  gap-2 flex">
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute justify-center items-center inline-flex">
            <img className="w-6 h-6" src="src/assets/yt.svg" />
          </div>
        </div>
      </div>
    </div> 
  </div>
</div>

      <div className="w-full bg2">
        <img src="src/assets/bg1.png" alt="" />
        <div className="justify-center items-start gap-4 inline-flex ">
          <div className="text-right text-stone-600 text-[13px] font-semibold ">Privacy Police</div>
          <div className="text-right text-stone-600 text-[13px] font-semibold ">Terms of User</div>
          <div className="text-right text-stone-600 text-[13px] font-semibold ">About Us</div>
          <div className="text-right text-stone-600 text-[13px] font-semibold ">Help Center</div>
        </div>
        <div className="justify-start items-center gap-6 inline-flex">
          <div className="text-stone-600 text-xs ">Email : sidiqmuhamad99@gmail.com</div>
          <div className="text-stone-600 text-xs ">@ 2023 Sidiq08.All Rights Reserved</div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default App
