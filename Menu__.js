'use strict'
const mainMenu = [[{name: 'Target System',url: ''},
    [{name: 'Desktop (Public)',url: ''}, [{name: 'Start Menu',url: ''}, [{name: 'Programs',url: ''},
                                                               {name: 'Product Name',url: ''},
                                                               { name: 'Admin Tools',url: ''},
                                                               {name: 'Startup', url: ''}]]],
    [{name: 'Interpub',url: ''}, {name: 'menu22',url: ''}],
    [{name: 'Program Files 32', url: ''}, {name: 'Product Name',url: ''}, {name: 'Common Files',url: ''}, {name: 'Microsoft Office',url: ''}],
    [{name: 'Program Files 64', url: ''},{name: '----------', url: ''}],
    [{name: 'Program Files (native)', url: ''},{name: '----------', url: ''}],
    [{name: 'Program Data', url: ''}, [{name: 'Pablisher', url: ''},{name: '----------', url: ''}],
                                    [{name: 'Install Mate', url: ''},{name: '----------', url: ''}]],
    [{name: 'Temp', url: ''}, {name: 'menu44', url: ''}],
    [{name: 'Users', url: ''}, {name: 'menu55', url: ''}],
    [{name: 'Windows', url: ''}, {name: 'Fonts', url: ''}, {name: 'Helps', url: ''}, {name: 'Inf', url: ''}],
    {name: 'System 16', url: ''}, {name: 'System 32', url: ''}, {name: 'System 64', url: ''}, {name: 'System native', url: ''},
    [{name: 'WinSxS', url: ''}, {name: 'menu 77', url: ''}], [{name: 'Menu 99', url: ''}, {name: 'menu end', url: ''}]]
];

let lineHTML = '<ul>';
let firstElement = true;
let nameElem = '';

const menu = {
    get: function (Menu, ind) {
        if (!Array.isArray(Menu)) {
            Menu.show = true;
            if (ind === 0) {
                lineHTML += '<li class="plus">' + Menu.name + '</li>';
            } else {
                lineHTML += '<li class="window" >' + Menu.name + '</li>';
            }

        } else {

            for (let d = 0; d < Menu.length; d++) {
                menu.get(Menu[d], d);
                if (d === 0 && !firstElement) {
                    lineHTML += '<ul>';
                }
                firstElement = false;
            }
            lineHTML += '</ul>';
            return
        }
    }
}

menuSistem.onclick = function (event) {

    firstElement = true; 
    lineHTML = '<ul>';
    let target = event.target;
    let mouse_x = window.event.clientX;
    let mouse_y = window.event.clientY;
    let popupShadow = document.getElementById('popupShadow');
    let popup = document.getElementById('popup');

    if (target.tagName === 'LI') {
        if (target.className === 'window') {
            popup.style.display = 'block';
            setTimeout(function () {
                popup.style.display = 'none';
            }, 8000)
        } else {
            target.classList.toggle('plus');
            target.classList.toggle('minus');
        }
    }
};
menu.get(mainMenu, 0);
lineHTML += '</ul>';

document.getElementById('menuSistem').innerHTML = lineHTML;
