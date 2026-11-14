import { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const navItems = [
    { label: 'Home', id: 'home', delay: 50 },
    { label: 'About', id: 'about', delay: 100 },
    { label: 'Courses', id: 'courses', delay: 150 },
    { label: 'Faculty', id: 'faculty', delay: 200 },
    { label: 'Notices', id: 'notices', delay: 250 },
    { label: 'Contact', id: 'contact', delay: 300 },
]

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        })

        const updateActiveSection = () => {
            const sections = navItems.map((item) => ({
                id: item.id,
                element: document.getElementById(item.id),
            })).filter((section) => section.element)

            const current = sections.reduce((active, section) => {
                const top = section.element.getBoundingClientRect().top
                return top <= 120 ? section : active
            }, sections.find((section) => section.id === 'home'))

            if (current) setActiveSection(current.id)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        return () => window.removeEventListener('scroll', updateActiveSection)
    }, [])

    return (
        <>
        <div className='fixed top-0 left-0 z-50 flex w-full items-center justify-between p-4 bg-gray-800 text-white' data-aos="fade-down">
            <div className='flex items-center space-x-2 font-bold text-xl' data-aos="fade-right">
                <img src={logo} alt="Logo" className='h-8 w-8 mr-2 inline-block transition-transform duration-300 hover:rotate-12 hover:scale-110' />
                <div>StudyHub</div> 
            </div>
            <nav className='flex space-x-12'>
                <ul className='flex space-x-12'>
                    {navItems.map((item) => (
                        <a key={item.id} href={`#${item.id}`} onClick={() => setActiveSection(item.id)}>
                            <li className={`group relative cursor-pointer transition-all duration-300 hover:text-blue-300 ${activeSection === item.id ? 'text-blue-300' : ''}`} data-aos="fade-up" data-aos-delay={item.delay}>
                                {item.label}
                                <span className={`absolute bottom-[-4px] left-0 h-[2px] w-full origin-left bg-blue-300 transition-transform duration-300 group-hover:scale-x-100 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </li>
                        </a>
                    ))}
                </ul>
            </nav>
            <div className='flex space-x-4' data-aos="fade-left">
                <Link to="/login"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:shadow-outline'>Login</button></Link>
                <Link to="/register"><button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded rounded-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:shadow-outline'>Register</button></Link>
            </div>

        </div>
        </>
    )
}

export default Navbar