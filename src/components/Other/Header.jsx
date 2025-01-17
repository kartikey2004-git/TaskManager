

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
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/> 
      <span className='text-3xl font-semibold'>Geeks🎀</span>
      </h1>
      <button onClick={logOutUser}
      className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header