import React, { useEffect, useRef } from 'react';

const Navbar = () => {
    const links = [
        { text: "CONTACT" },
        { text: "PROJECTS" },
        { text: "ABOUT" },
        { text: "HOME" }
    ];
     const intervalMap = new Map();
    const onMouseOver = (index, event) => {
            let iteration = 0;
            // event.target.classList.add('red-text')
            clearInterval(intervalMap.get(index));

            const interval = setInterval(() => {
                    let newText = event.target.innerHTML.split('');

                    for(let i = 0; i < newText.length; i++){
                        if(i < iteration){
                            newText.push('<p className="red-text">' + event.target.dataset.value[i] + '</p>');
                        }else{
                            newText.push('<p>' + randomLetter() + '</p>');
                        }
                    }

                event.target.innerHTML = newText.join('');

                if (iteration >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);

            intervalMap.set(index, interval);
        };
        const onMouseOut = (index, event) => {
            // event.target.classList.remove('red-text')
            clearInterval(intervalMap.get(index));
            const target = document.getElementById(`link-${index}`);
            if (target) {
                target.innerHTML = target.dataset.value.replace(/./g, '$&<br/>');
            }
        };

    useEffect(() => {
        // window.onload = onMouseOver(0, );
        return () => {
            intervalMap.forEach((interval) => clearInterval(interval));
        };
    }, []);

    const randomLetter = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * 26)];
    };

    return (
        <nav>
            <div className="top-white-line"></div>
            <div className="links-container">
                {links.map((link, index) => (
                    <div key={index}>
                        <div className="white-dot"></div>
                        <img
                            src="/images/diamond.svg"
                            width={21}
                            height={21}
                            alt="Diamond"
                        />
                        <h5
                            id={`link-${index}`}
                            data-value={link.text}
                            onMouseOver={(event) => onMouseOver(index, event)}
                            onMouseOut={(event) => onMouseOut(index, event)}
                        >
                            {link.text.split('').map((letter, index) => (
                                <React.Fragment key={index}>
                                    {letter}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h5>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
