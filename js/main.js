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

var time;
var shown = false;

function trail(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

$(document).ready(() => {
    setInterval(() => {
        if(!shown) {
            $(".fg").css({"visibility": "visible", "animation": "flash 0.5s"});
            shown = true;
        }

        time = moment();
        $("#timer").html(`${trail(time.hours(), 2)}:${trail(time.minutes(), 2)}:${trail(time.seconds(), 2)}`);
    }, 1000);
});