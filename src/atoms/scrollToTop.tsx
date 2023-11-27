import React, { useState } from 'react'
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop: React.FC = () => {
    const distanceToShow: number = 200
    const [show, setShow] = useState(false)

    window.onscroll = () => { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > distanceToShow || document.documentElement.scrollTop > distanceToShow) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (<>
        {show && <div
            className="fixed right-5 bottom-5 w-[50px] h-[50px] hidden md:flex justify-center items-center border border-[#000] rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#000] hover:text-[#fff]"
            onClick={handleScrollToTop}>
            <BsArrowUp size={30} />
        </div>}
    </>
    )
}

export default ScrollToTop