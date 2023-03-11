const menuTop=[
    {title: "Home", link:".index.html/"},
    {title: "About me", link:".contact.html/"},
    {title: "Reviews", link:"..blogs.html/"}
];

window.addEventListener('DOMContentLoaded', (Event)=>{
    console.log('DOM fully loaded and parsed');
    renderMenu();
});

const renderMenu=() =>{
    const navBar = document.querySelector(".menuTop");

    menuItems.forEach(item =>{
        const newItem = document.createElement("li");
        const newBar = document.createElement("a");

        newLink.href =item.links;
        newLink.text = item.text;
        newItem.appendChild(newLink);
        newBar.appendChild(newItem);
    });
};