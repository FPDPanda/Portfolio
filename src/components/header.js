import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Jean Jacques</h1>
            <nav>
                <ul>
                    <li>
                        <Link to = '..'>Home</Link>
                    </li>
                    <li>
                        <Link to = '../aboutus'>About Me</Link>
                    </li>
                    <li>
                        <Link to = '../blog'>My blog</Link>
                    </li>
                    <li>
                        <Link to = '../contact'>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header