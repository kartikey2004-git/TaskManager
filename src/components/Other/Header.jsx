const Header = (props) => {

  // console.log(data);

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername('Admin')
  // }
  // else{
  //   setusername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    // console.log(props.changeUser);
    // eslint-disable-next-line react/prop-types
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-cyan-500/10 transition-all duration-300 gap-4 sm:gap-0'>
      <div className="space-y-1">
        <h1 className='text-xl sm:text-2xl font-medium text-gray-300'>Welcome back,</h1>
        <span className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient'>Admin</span>
      </div>
      <button 
        onClick={logOutUser}
        className='w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-base sm:text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/20'
      >
        Log out
      </button>
    </div>
  )
}

export default Header