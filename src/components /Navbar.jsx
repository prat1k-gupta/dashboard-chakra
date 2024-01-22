
import { Button, ButtonGroup } from '@chakra-ui/react'
export const Navbar = () => {
    return (
        <div className="nav">
            <div className="navLogo">
                <h3 className='heading'>Navbar</h3>
            </div>
            <div className="nav-items">
                <ButtonGroup gap='4'>
                    <Button colorScheme='gray'>Login</Button>
                    <Button colorScheme="" variant={'outline'}>Register</Button>
                </ButtonGroup>
            </div>

        </div>
    )
}