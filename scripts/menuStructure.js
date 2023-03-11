const menuItems =[
    {title: 'Home ', link:'/index'},
    {title: 'About me ', link:'/contact'},
    {title: 'Review', link: '/blogs'}
];

const intialiseMenu= () =>{
    const nav =document.querySelector("nav");

    const ul = document.createElement("ul");

    for (let item of (menuItems) ){
        const li =document.createElement('li');
        const a = document.createElement('a');
         
        a.innerText= item.title;
        a. href= item.link;
        li.appendChild(a);
    }

    nav.appendChild(ul);
};

document.addEventListener('DOMContentLoaded',() => intialiseMenu());