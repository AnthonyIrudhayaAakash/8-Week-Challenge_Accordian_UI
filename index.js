
//Two 'const' variables stores each NodeList of Elements with Specified CSS Selector
//For Example: accordian_Header = NodeList[]
const accordion_Headers = document.querySelectorAll(".header_container");
const accordion_Bodies = document.querySelectorAll(".accordion_body_container");

//To Track the Accordion Toggle Status 
let body_display = true;

//EventListener is attached for each elements in 'accordian_Headers'

//Whenever the header is clicked the callback function is invoked
accordion_Headers.forEach((accordion_Header, index) => {
    accordion_Header.addEventListener("click", () => {
        if (body_display) {
            accordion_Bodies[index].style.display = "flex";

        } else {
            accordion_Bodies[index].style.display = "none";

        }
        //To make the accordian toggle and un-toggle
        body_display = !body_display;
    });
});
