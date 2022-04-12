/*
MIT License

Copyright (c) 2020 Marc Steven Clemen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/

var shown = false;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Contents loaded")
    let fg = document.getElementsByClassName("fg")
    let timer = document.getElementById("timer")

    setInterval(() => {
        if(!shown) {
            for(let element of fg) {
                element.style.visibility = "visible"
                element.style.animation = "flash 0.5s"
            }

            shown = true;
        }
    
        // Update time text (HH:mm:ss) - 24h format
        timer.innerText = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })
    }, 1000);
})