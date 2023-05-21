'use client'
import { useState } from "react";


export function Navigation() {
  
  const [isMenuButtonOpen, setMenuButtonState] = useState(false);

  function onCLick() {
    setMenuButtonState(!isMenuButtonOpen);
    console.log('isMenuButtonOpen', isMenuButtonOpen);   
  }
  return (
    <header>
      <nav className="bg-red-duyou-primary border-gray-200 dark:bg-gray-900">
        <div className="
          flex 
          md:flex-nowrap
          flex-wrap
          items-center 
          justify-between 
          mx-auto 
          px-5
          md:py-4
          md:px-10
          py-0 
          ">
          <a href="https://duyou.com.mx/" className="
            flex 
            items-center
            pr-8">
              <img src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/logo.png" className="
                w-[92px] 
                md:w-[138px] 
                h-full 
                mr-3" alt="Flowbite Logo" />
          </a>
          <button onClick={onCLick} data-collapse-toggle="navbar-default" type="button" className="  
            inline-flex 
            items-center 
            p-2 
            pr-0
            ml-3 
            text-sm 
            text-white
            rounded-lg 
            md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className={
            (isMenuButtonOpen?'block':'hidden')  + " w-full md:block md:w-auto"} id="navbar-default">
            <ul className="
              md:items-center
              text-2xl
              md:text-base
              2xl:text-2xl
              bg-red-duyou-primary 
              font-avenir-book 
              text-white 
              flex 
              flex-col 
              md:p-0 
              pb-8
              mt-4 
              rounded-lg 
              md:flex-row 
              md:space-x-5 
              md:mt-0">
              <li className="
                md:border-0 
                border-b
                md:hidden
                block">
                <a href="/" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 dark:text-white 
                  md:dark:hover:text-blue-500
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent">Home</a>
              </li>
              <li className="
                md:border-0 
                border-b">
                <a href="nosotros" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 dark:text-white 
                  md:dark:hover:text-blue-500
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent">Nosotros</a>
              </li>
              <li className="
                border-b 
                md:border-0">
                <a href="proceso-de-logistica" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent">Proceso de logística</a>
              </li>
              <li className="
                border-b 
                md:border-0">
                <a href="servicios" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent">Servicios</a>
              </li>
              <li className="
                border-b 
                md:border-0">
                <a href="blog" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent">Blog</a>
              </li>
              <li className="
                border-b 
                md:border-0">
                <a href="contacto" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  pl-3 
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent
                  ">Contacto</a>
              </li>
              <li className="
                hidden
                md:block
                border-b 
                md:border-0">
                <a href="cotizar" className="
                  float-right
                  md:py-2
                  block 
                  py-2 
                  font-avenir-black 
                  bg-white 
                  text-red-duyou-primary 
                  rounded  
                  md:border-0  
                  md:px-20 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent
                  ">Cotizar</a>
              </li>
              <li className="
                hidden
                md:block
                border-b 
                md:border-0">
                <a href="tel:555-666-7777" className="
                  float-right
                  md:py-2
                  py-2 
                  block 
                  pl-3 
                  text-lg
                  md:text-sm
                  2xl:text-lg
                  text-white 
                  rounded  
                  md:hover:bg-transparent 
                  md:border-0  
                  md:p-0 
                  dark:text-white 
                  md:dark:hover:text-blue-500 
                  dark:hover:bg-gray-700 
                  dark:hover:text-white 
                  md:dark:hover:bg-transparent
                  ">Llámanos al: (55) 477-7540-719</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>);
}