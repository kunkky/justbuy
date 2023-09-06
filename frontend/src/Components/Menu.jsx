import 'animate.css'
const Menu = ({showMenu , menuHandler}) => {
    return (
        <div>
            {showMenu && (
                <nav className='leading-[3rem] text-center animate-[fadeIn_1s] w-[100%] text-[1.5rem] text-justbuy-star bg-justbuy-black opacity-90 '>
                    <p onClick={menuHandler}>Home</p>
                    <p onClick={menuHandler}>Contact</p>
                    <p onClick={menuHandler}>About</p>
                    <p onClick={menuHandler}>Sign Up</p>
                </nav>
            )}
        </div>
    )
}

export default Menu