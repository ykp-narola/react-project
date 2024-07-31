

function customerRender(reactElement, container){
    const createElement = document.createElement(reactElement.type)
    createElement.innerHTML = reactElement.children;
    console.log('createElement :>> ', createElement);
    createElement.setAttribute("href", reactElement.props.href);
    createElement.setAttribute("target", reactElement.props.target);
    container.appendChild(createElement);
    
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me"
}

const container = document.querySelector('#root');


customerRender(reactElement, container)