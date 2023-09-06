"use client"
import Image from "next/image"
import { CgProfile, CgHeart, CgSearch, CgShoppingCart, CgLogIn, CgUserAdd } from "react-icons/cg"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState, useEffect, useRef, useContext } from "react"
import Link from 'next/link'
import { globalContext } from "@/app/globals/context"

function Navbar() {

    const { userLogin, setIsLogin, setUserObj, user } = useContext(globalContext);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const profileDropdownRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    useEffect(() => {
            // Disable scrolling when the profile dropdown is open
            if (!isProfileDropdownOpen) {
                document.body.style.overflow = "auto";
            } else {
                document.body.style.overflow = "hidden";
            }
    },[isProfileDropdownOpen])


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };

        if (isProfileDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isProfileDropdownOpen]);

    return (
        <nav className="flex bg-white md:grid md:grid-cols-3 px-[3%] md:px-[5%] xl:px-[8%] py-5 md:py-2 justify-between items-center sticky top-0 z-[100] shadow md:shadow-none drop-shadow-md">

            {/* Phone screen Hamburger - Start */}
            <div className="grid md:hidden">
                <button className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors" onClick={toggleSidebar}>
                    <RxHamburgerMenu className="text-3xl" />
                </button>
            </div>
            {/* Phone screen Hamburger - End */}


            {/* Phone screen Sidebar - Start */}
            <div
                className={`md:hidden fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-white z-[101] transition-transform ${isSidebarOpen ? "transform translate-x-0" : "hidden"
                    }`}
            >
                <button
                    className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors absolute top-4 right-4"
                    onClick={toggleSidebar}
                >
                    <span className="text-3xl">×</span>
                </button>

                <div className="relative grid grid-rows-7 gap-2 text-lg top-20 px-[7%] font-base font-semibold tracking-[0.04em]">
                    <button className="w-full hover:text-teal-500 text-primary" href="/">Home</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <button className="w-full hover:text-teal-500 text-primary" href="/shop">Shop</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <button className="w-full hover:text-teal-500 text-primary" href="/">Consultation</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <button className="w-full hover:text-teal-500 text-primary" href="/">Profile</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <button className="w-full hover:text-teal-500 text-primary" href="/wishlist">Wishlist</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <button className="w-full hover:text-teal-500 text-primary" href="/cart">Cart</button>
                    <div className="h-px bg-gray-100 w-full"></div>

                    <button className="w-full hover:text-teal-500 text-primary" href="/">Contact Us</button>
                    <div className="h-px bg-gray-100 w-full"></div>
                </div>

            </div>
            {/* Phone screen Sidebar - End */}



            <div>
                {/* Left side Three Links - Start */}
                <div className="md:grid grid-cols-3 gap-3 items-center text-center mx-auto font-normal font-base hidden tracking-[0.04em] py-4">
                    <Link className="text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary"
                        href="/">Home</Link>

                    <Link className="text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary"
                        href="/shop">Shop</Link>

                    <Link className="text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary"
                        href="/consultation">Consultation</Link>
                </div>
                {/* Left side Three Links - End */}
            </div>

            <div className="justify-center hidden md:flex">
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    height={35}
                    width={100}
                />
            </div>

            <div className="relative grid place-items-center">
                <div className="relative flex items-center justify-end space-x-4 lg:space-x-8">
                    <div>
                        <button className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors relative flex justify-center gap-1 items-center" onClick={() =>setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                            <CgProfile className="text-3xl md:text-2xl" />
                            { userLogin && <span className="font-normal">Hi, {user.firstName}</span>}
                        </button>
                        {isProfileDropdownOpen && (
                            userLogin ?
                                <div className="absolute md:mt-2 -left-20 bg-white drop-shadow-2xl px-3 py-1">
                                    <button className="hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1" onClick={() => { setIsLogin(false); setUserObj([]); setIsProfileDropdownOpen(false);}}>
                                        <span className="mr-16">Log Out</span>
                                        <CgLogIn className="text-2xl" />
                                    </button>
                                </div>
                                :
                                <div ref={profileDropdownRef} className="absolute md:mt-2 -left-20 grid grid-rows-2 bg-white drop-shadow-2xl px-3 py-1">
                                    <Link href={'/login'} className="hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1" onClick={()=>setIsProfileDropdownOpen(false)}>
                                        <span className="mr-16">Sign In</span>
                                        <CgLogIn className="text-2xl" />
                                    </Link>
                                    <Link href={'/signup'} className="hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1" onClick={()=>setIsProfileDropdownOpen(false)}>
                                        <span className="mr-14">Sign Up</span>
                                        <CgUserAdd className="text-2xl" />
                                    </Link>
                                </div>
                        )}
                    </div>

                    <Link className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl" title="Wishlist" href="/wishlist"><CgHeart /></Link>
                    <Link className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl" title="CgSearch" href="/"><CgSearch /></Link>
                    <Link className="text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl" title="Wishlist" href="/cart"><CgShoppingCart /></Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar