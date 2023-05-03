let user = { 
    name: "John", 
    age: 30,
    isAdmin: true
};

let obj = {
    test: undefined
};

alert( obj.test );
alert( "test" in obj );

for (let key in user) {
    alert (key);
    alert ( user[key] );
}

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  
    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)