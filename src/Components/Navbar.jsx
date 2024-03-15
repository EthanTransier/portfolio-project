import React, { useEffect, useRef } from 'react';

const Navbar = () => {
    const links = [
        { text: "CONTACT" },
        { text: "PROJECTS" },
        { text: "ABOUT" },
        { text: "HOME" }
    ];

    const intervalMap = useRef(new Map());

    const onMouseOver = (index) => (event) => {
        let iteration = 0;

        clearInterval(intervalMap.current.get(index));

        const interval = setInterval(() => {
            console.log(event.target)
            const newText = event.target.dataset.value
                .split("")
                .map((letter, i) => {
                    if (i < iteration) {
                        return event.target.dataset.value[i];
                    }
                    return randomLetter();
                })
                .map((letter, i) => `<p key=${i} className="red-text">${String(letter)}</p>`); // Convert letter to string
                console.log(newText)
            event.target.innerHTML = newText;

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        intervalMap.current.set(index, interval);
    };

    const onMouseOut = (index) => () => {
        clearInterval(intervalMap.current.get(index));
        const target = document.getElementById(`link-${index}`);
        if (target) {
            target.innerHTML = target.dataset.value.split("").map((letter, i) => `<p key=${i}>${String(letter)}</p>`); // Convert letter to string
        }
    };

    useEffect(() => {
        return () => {
            intervalMap.current.forEach((interval) => clearInterval(interval));
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
                            onMouseOver={onMouseOver(index)}
                            onMouseOut={onMouseOut(index)}
                        >
                            {link.text.split("").map((letter, i) => <p key={i}>{String(letter)}</p>)} {/* Convert letter to string */}
                        </h5>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
