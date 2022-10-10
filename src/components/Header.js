import Button from "./Button"

const Header = ({title}) => {

    const onClick = () => {
        console.log("clock")
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='black' text='Add' onClick={onClick}/>
        
    </header>
  )
}

export default Header