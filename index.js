import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.6.0.min.js"

const { div, button,img,a,span } = van.tags;

const main = document.querySelector(".main");
const space2 = document.querySelector("#space2")

const projectImage = (isToggled,link, imageLink) => {
    return a(
            {href: link, class : () => isToggled.val? "view" : "hide" },
            img(
                {
                    src:imageLink,
                    class : "projectImage"

                }
            ))
}

const projectArrow = (isToggled) => {
    return img(
        {src:"./svg/stat_minus_1_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
         class : () => isToggled.val? "arrow_up" : "arrow_down" 
        },
    )
}

const progetti = (menu_title) => {
    const isToggled = van.state(false);
    return div(
        {class : "link"},
        div(
            {class : "title_link"},
            projectArrow(isToggled),
            button({onclick : () => isToggled.val = !isToggled.val}, "Progetti")
        ),
        projectImage(isToggled,"../projects/project_test.html", "./img/myself.png"),
    )
}

const aboutme = (menu_title) => {
    const isToggled = van.state(false);
    return div(
        {class : "link"},
        div(
            {class : "title_link"},
            projectArrow(isToggled),
            button({onclick : () => isToggled.val = !isToggled.val}, "About me")
        ),
        projectImage(isToggled,"../projects/project_test.html", "./img/myself.png"),
    )
}

main.insertBefore(progetti(), space2)
main.insertBefore(aboutme(), space2)