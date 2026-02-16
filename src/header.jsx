import { useEffect, useRef, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"

function Header() {
    const [open, setOpen] = useState(false)
    const [dropdown, setDropdown] = useState(null)
    const featuresRef = useRef(null)
    const companyRef = useRef(null)
    const mobileMenuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (featuresRef.current && featuresRef.current.contains(event.target)) {
                return
            }
            if (companyRef.current && companyRef.current.contains(event.target)) {
                return
            }
            if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
                return
            }
            setOpen(null)
            setDropdown(null)
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div>
            <nav className="flex justify-between items-center px-[4%] py-4">
                <div className="flex items-center gap-10 ">
                    {/* logo */}
                    <img src="/assets/images/logo.svg" alt="" />

                    {/* dropdown links container */}
                    <div
                        ref={mobileMenuRef}
                        className={`flex gap-4 items-center max-sm:top-0 max-sm:flex-col  max-sm:bg-white max-sm:fixed max-sm:min-h-screen max-sm:w-[60%] max-sm:shadow-md max-sm:items-start max-sm:pt-20 max-sm:px-5 max-sm:transition-all max-sm:duration-1000 max-sm:ease-in-out max-sm:z-50
                        ${open ? 'max-sm:right-0' : 'max-sm:-right-full'}`}>

                        {/* dropdown links  */}
                        <div
                            ref={featuresRef}
                            className="relative">
                            <button
                                onClick={() => setDropdown(prev => (prev === 'features' ? null : 'features'))}
                                className={`${dropdown === 'features' ? 'text-Gray-950' : 'text-Gray-500'}
                                    flex gap-2 font-medium cursor-pointer hover:text-Gray-950 items-center`}
                            >
                                <span>Features</span>
                                {dropdown === 'features' ? <img src="/assets/images/icon-arrow-up.svg" alt="" /> : <img src="/assets/images/icon-arrow-down.svg" alt="" />}




                            </button>

                            {dropdown === 'features' && (

                                <section className="absolute bg-white shadow-lg rounded-md w-35 p-4 mt-4 max-sm:relative max-sm:w-full max-sm:shadow-none max-sm:mt-2">
                                    <div className="flex gap-3 mb-2 max-sm:mb-3 items-center text-Gray-500 font-medium">
                                        <img src="/assets/images/icon-todo.svg" alt="" />
                                        <p>Todo List</p>
                                    </div>

                                    <div className="flex gap-3 mb-2 max-sm:mb-3 items-center text-Gray-500 font-medium">
                                        <img src="/assets/images/icon-calendar.svg" alt="" />
                                        <p>Calendar</p>
                                    </div>
                                    <div className="flex gap-3 mb-2 max-sm:mb-3 items-center text-Gray-500 font-medium">
                                        <img src="/assets/images/icon-reminders.svg" alt="" />
                                        <p>Reminders</p>
                                    </div>

                                    <div className="flex gap-3  items-center text-Gray-500 font-medium">
                                        <img src="/assets/images/icon-planning.svg" alt="" />
                                        <p>Planning</p>
                                    </div>

                                </section>
                            )}

                        </div>

                        <div 
                            ref={companyRef}
                            className="relative">
                            <button
                                onClick={() => setDropdown(prev => (prev === 'company' ? null : 'company'))}
                                className={` ${dropdown === 'company' ? 'text-Gray-950' : 'text-Gray-500'}
                                flex gap-2 font-medium  cursor-pointer hover:text-Gray-950 items-center`}>
                                <span>Company</span>

                                {dropdown === 'company' ? <img src="/assets/images/icon-arrow-up.svg" alt="" /> : <img src="/assets/images/icon-arrow-down.svg" alt="" />}



                            </button>

                            {dropdown === 'company' && (
                                <section className="absolute bg-white w-30 rounded-md  p-4 shadow-lg mt-4 max-sm:relative max-sm:shadow-none max-sm:mt-2">
                                    <p className="mb-2 max-sm:mb-3 text-Gray-500 font-medium">History</p>
                                    <p className="mb-2 max-sm:mb-3  text-Gray-500 font-medium">Our Teams</p>
                                    <p className=" text-Gray-500 font-medium">Blog</p>

                                </section>

                            )}
                        </div>

                        <div >
                            <p
                                onClick={() => setDropdown(prev => (prev === 'careers' ? null : 'careers'))}
                                className={` ${dropdown === 'careers' ? 'text-Gray-950' : 'text-Gray-500'} flex gap-2 font-medium  cursor-pointer hover:text-Gray-950`}>Careers</p>
                        </div>

                        <div >
                            <p
                                onClick={() => setDropdown(prev => (prev === 'about' ? null : 'about'))}
                                className={`${dropdown === 'about' ? 'text-Gray-950' : 'text-Gray-500'}
                                flex gap-2 font-medium cursor-pointer hover:text-Gray-950`}>About</p>
                        </div>

                        <div className="hidden max-sm:block max-sm:w-full max-sm:mt-5">
                            <button className="cursor-pointer text-Gray-500 hover:text-Gray-950 block mx-auto mb-3">Login</button>
                            <button className="border-2 px-3 rounded-lg py-1 border-Gray-500 cursor-pointer text-Gray-500 hover:text-Gray-950 hover:border-Gray-950 w-full">Register</button>

                        </div>




                    </div>
                </div>

                <div className="gap-4 flex items-center font-medium max-sm:hidden">
                    <button className="cursor-pointer text-Gray-500 hover:text-Gray-950">Login</button>
                    <button className="border-2 px-3 rounded-lg py-1 border-Gray-500 cursor-pointer text-Gray-500 hover:text-Gray-950 hover:border-Gray-950">Register</button>
                </div>

                <button
                    onClick={() => setOpen(prev => !prev)}
                    className="cursor-pointer hidden max-sm:inline-block z-50 text-2xl">
                    {open ? <RxCross1 /> : <GiHamburgerMenu />}
                </button>

                <div className={`hidden  max-sm:w-screen max-sm:min-h-screen max-sm:fixed max-sm:bg-[hsl(0,0%,8%,.7)] z-40 max-sm:top-0 max-sm:left-0 
                    ${open ? 'max-sm:block' : 'hidden'}`}>

                </div>

            </nav>
        </div>
    )
}

export default Header