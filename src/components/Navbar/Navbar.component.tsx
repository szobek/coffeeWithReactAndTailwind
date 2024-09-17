const Navbar = () => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80" href="/" aria-label="Brand" >Coffee</a>
                <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="/">List</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar