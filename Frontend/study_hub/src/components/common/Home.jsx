import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TypewriterText = ({ text, startDelay = 0, speed = 45 }) => {
    const [writtenText, setWrittenText] = useState('');

    useEffect(() => {
        let letterIndex = 0;
        let typingTimer;
        const startTimer = setTimeout(() => {
            typingTimer = setInterval(() => {
                letterIndex += 1;
                setWrittenText(text.slice(0, letterIndex));

                if (letterIndex >= text.length) {
                    clearInterval(typingTimer);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(startTimer);
            clearInterval(typingTimer);
        };
    }, [text, startDelay, speed]);

    return writtenText;
};

const Home = () => {
    return (
        <>
        <style>{`
            @keyframes home-button-slide-in {
                from { opacity: 0; transform: translateX(-80px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .home-button-slide-in {
                animation: home-button-slide-in 700ms ease-out both;
            }
        `}</style>
        <div id="home" className="scroll-mt-20 flex flex-col justify-start items-start bg-[url('/src/assets/collegecmp.jpg')] bg-cover bg-center bg-no-repeat text-white h-screen text-left p-4">
            <h2 className='text-4xl text-white mt-50'>
                
                <TypewriterText text="Welcome to" />
                <br />
                <span className="text-yellow-300 font-bold text-5xl">
                    <TypewriterText text="StudyHub" startDelay={650} />
                </span>
            </h2>
            <p className='text-2xl mt-4 mb-4 text-gray-100'>
                <TypewriterText text="College Learning & Course Management Platform" startDelay={1100} speed={25} />
            </p>
            <p className='text-lg mb-4 text-cyan-100'>
                <TypewriterText text="Access your courses, assignments, resources and more - all in one place. 
               " startDelay={2100} speed={18} /> <br />
               <TypewriterText text=" Designed for students, instructors and administrators." startDelay={3200} speed={18} />
            </p>
            <div className="flex space-x-4">
                <Link to="/login">
                    <button className="home-button-slide-in bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded rounded-lg focus:outline-none focus:shadow-outline" style={{ animationDelay: '4200ms' }}>Get Started</button>
                </Link>
                    <button className="home-button-slide-in bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded rounded-lg focus:outline-none focus:shadow-outline" style={{ animationDelay: '4400ms' }}>Learn More</button>
            </div>
        </div>
        </>
    );
};
export default Home;