let inputEle = document.createElement("input");
inputEle.placeholder = "name...";

let inputElePass = document.createElement("input");
inputElePass.placeholder = "password...";
inputElePass.setAttribute("type", "password");

let messageEle = document.createElement("h3");

let button = document.createElement("button");
button.innerHTML = "log in";

button.addEventListener("click", function (){

    if(inputEle.value == "coolStudent123")
    {
        button.remove()
        inputEle.remove()
        inputElePass.remove()
        messageEle.remove()

        const pages = [
            {
                page:"home",
                navigate: homePage
            },
            {
                page:"about",
                navigate: about
            },
            {
                page:"view",
                navigate: view
            }
        ]

        function navButton(pg, pr, nv)
        {
            let button = document.createElement("button");
            button.innerHTML = pg;
            button.addEventListener("click", function ()
            {
                document.body.querySelector(".wrapper").innerHTML = " "
                nv();
            })
            pr.appendChild(button);
        }

        function navigation()
        {
            let nav = document.createElement("nav");
            let wrapper = document.createElement("div");
            wrapper.classList.add("wrapper");
            nav.style.height = "80px";
            nav.style.backgroundColor = "blue";
            for(obj of pages)
            {
                console.log(obj.name);
                navButton(obj.page, nav, obj.navigate);
            }
            document.body.appendChild(nav);
            document.body.appendChild(wrapper);
        }

        function homePage()
        {
            let home = document.createElement("h1");
            home.innerHTML = "home page";
            document.body.querySelector(".wrapper").appendChild(home);
        }

        function about()
        {
            let about = document.createElement("h1");
            let name = document.createElement("h3");
            about.innerHTML = "about";
            name.innerHTML = "hayden";
            document.body.querySelector(".wrapper").appendChild(about);
            document.body.querySelector(".wrapper").appendChild(name);
        }


        function view()
        {
            let messageEleNew = document.createElement("h3");


            let input = "";
            let importance = 0;

           let textEle = document.createElement("input");
           textEle.placeholder = "text...";
            let importanceEle = document.createElement("input");
           importanceEle.placeholder = "importance...";

           let buttonTwo = document.createElement("button");
           buttonTwo.innerHTML = "submit";
           document.body.querySelector(".wrapper").appendChild(buttonTwo)
            buttonTwo.addEventListener("click",function (){
              input = textEle.value
              importance = importanceEle.value
                isNaN(input)
                isNaN(importance)
                if(isNaN(input) === true && isNaN(importance) === false)
                {
                    let ele= document.createElement("div")
                    let textEle = document.createElement("h1")
                    textEle.innerHTML = input + " " + importance
                    ele.appendChild(textEle)
                    document.body.querySelector(".wrapper").appendChild(ele)
                }
                else
                {
                    document.body.appendChild(messageEleNew).style.color = "red";
                    messageEleNew.innerHTML = "text must be a letter a - z AND importance must be a number !!"
                    document.body.appendChild(messageEleNew);
                }
            })
            document.body.appendChild(textEle);
            document.body.appendChild(importanceEle);
            document.body.appendChild(buttonTwo);
        }
        navigation();
        homePage();

    }
    else
    {
        document.body.appendChild(messageEle).style.color = "red";
        messageEle.innerHTML = "username wrong !!"
    }

})

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);

