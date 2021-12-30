// import SearchIcon from '@mui/icons-material/Search';
import { LogoutIcon, SearchIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../redux/userRedux';


function Navbar() {

    const quantity = useSelector(state => state.cart.quantity);
    console.log("our cart", quantity);

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser);

    const logOut = (e) => {
        e.preventDefault();
        dispatch({
            type: logout,
            payload: null
        })
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-3 text-gray-700 bg-white shadow-md md:px-10">
            <div className="flex items-center  ">
                <LogoutIcon className='h-10 cursor-pointer ' onClick={logOut} />
                {/* <p className='text-lg lg:text-2xl text-center'>
                </p> */}
                {/* <div className="hidden lg:inline-flex items-center w-70 md:border-2 py-2 rounded-full ">
                    <input className="flex-grow outline-none pl-5 bg-transparent text-gray-600 placeholder-gray-400 " type="text" placeholder="Search" />
                    <SearchIcon className="hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
                </div> */}

            </div>
            <div className='font-semibold flex justify-center items-center cursor-pointer ' href='/'>
                {/* center */}
                <h1 className='text-xl lg:text-4xl font-serif'>SHIVA</h1>
            </div>
            <div className='flex items-center justify-end space-x-3  text-gray-700'>
                {/* right  */}
                {
                    user ? (
                        <>

                            <Link to='/register'>
                                <h2 className='hidden md:inline-flex text-lg lg:text-xl cursor-pointer' >shivam</h2>
                            </Link>
                            <Link to='/login'>
                                <h2 className='text-lg lg:text-xl cursor-pointer'>Singh</h2>
                            </Link>
                        </>
                    ) : (
                        <>

                            <Link to='/register'>
                                <h2 className='hidden md:inline-flex text-lg lg:text-xl cursor-pointer' >Register</h2>
                            </Link>
                            <Link to='/login'>
                                <h2 className='text-lg lg:text-xl cursor-pointer'>Sign</h2>
                            </Link>
                        </>
                    )
                }

                <Link to='/cart'>
                    <div className='relative '>
                        <ShoppingCartIcon className="h-5 lg:h-8 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                        <div className=" absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center
                        animate-pulse text-white">{quantity}</div>
                    </div>
                </Link>
            </div>
        </header>

    )
}

export default Navbar
