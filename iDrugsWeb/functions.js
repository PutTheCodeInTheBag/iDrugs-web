
var totalPrice = 0.0;
let productPlacer = document.getElementById("main");
let putPrice;

Image = new Image();

function createProduct( name = "Unknown", price = 0.0, description = "No description", Image = "https://imgs.search.brave.com/itEnZwJawp2E5NxMgTq__kVxDeT1tVAt554beS5RIuE/rs:fit:339:265:1/g:ce/aHR0cHM6Ly9ibG9n/LnJhaHVsYmh1dGFu/aS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDUvU2Ny/ZWVuc2hvdC0yMDE4/LTEyLTE2LWF0LTIx/LjA2LjI5LnBuZw") {
    let newDiv = document.createElement("div");
    let button = document.createElement("button"); // buy
    let p = document.createElement('p'); // description
    let h4 = document.createElement("h4"); // price
    let h2 = document.createElement("h2"); // name
    let Img = document.createElement("img"); // Image

    name = name.toUpperCase();

    putPrice="R$"+Math.round(price);

    Img.src = Image;
    p.textContent = description;
    h4.textContent = putPrice;
    h2.textContent = name;

    newDiv.append(Img);
    newDiv.append(h2);
    newDiv.append(h4);
    newDiv.append(p);
    newDiv.append(button);

    button.addEventListener('clcik', () => {totalPrice+=price; console.log(totalPrice);});
    button.textContent = "BUY";
  
    newDiv.classList.add("product");
    productPlacer.appendChild(newDiv)
}

function priceGetter(price) {
    totalPrice+=price;
}

new createProduct("Tabacco",50, "The best from Cuba", "https://imgs.search.brave.com/EYkwo_EcyBc14h4GgYxyGaXr6HQKojDwXpUcQfPhEl4/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly93d3cu/dGhvdWdodGNvLmNv/bS90aG1iL2p2S2dl/bjhtbF8zUU5LSDJm/LVh2TkNqcDMxQT0v/MTUwMHgxMDAwL2Zp/bHRlcnM6ZmlsbChh/dXRvLDEpL0N1YmFu/Q2lnYXItNThjYjA1/YjM1ZjliNTgxZDcy/YTc2ZGUxLmpwZw"); 
new createProduct("Morphine",95, "Hard time to sleep? Try this!", "https://imgs.search.brave.com/WQUWeoCRSyClkfU7_lx4LcwJl5XvkDAjYJp6uPAADJs/rs:fit:1074:872:1/g:ce/aHR0cDovL3d3dy4y/NGhycGhhcm1hdXNh/LmNvbS9wcm9kdWN0/X2ltYWdlcy9sLzEx/Mi9nZW5lcmljLW1v/cnBoaW5lLXN1bHBo/YXRlX181OTcyOF96/b29tX18xOTgwOF96/b29tLmpwZw"); 
new createProduct("Minecraft",150, "Cures anything, and is more vicious than everything", "https://imgs.search.brave.com/_2BKYnhC7Vcz5KBMpqIf4darw4_d1I_Nb_J0KTz8OrM/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9jZG4x/LnZveC1jZG4uY29t/L3RodW1ib3IvemZV/UUU2dnJIZVEtbmZm/UUFwZHhORWdaS0VJ/PS8weDA6MTI4MHg3/MjAvMTI4MHg3MjAv/Y2RuMC52b3gtY2Ru/LmNvbS91cGxvYWRz/L2Nob3J1c19pbWFn/ZS9pbWFnZS80MzU1/MTM2MC9taW5lY3Jh/ZnRfcHM0X2VkaXRp/b24uMC4wLmpwZw"); 
new createProduct("Stimpack",20, "Heal as much as a nap!", "https://imgs.search.brave.com/JMb7ZimxGR7UBhuYqOhSomhcSzlLi3ctBkyDIhcdL8A/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvemdn/OGhEQzZDNGprekRj/ejl2eHY3VXFSRENT/TmVvWTlVXzNvanQz/NDJvQS5qcGc_YXV0/bz13ZWJwJnM9YmVi/NThiODlkNjNiNjE3/ZmZkMWJjMDZmMjgz/MjNlMjAyYjRlMDMw/NQ"); 
new createProduct("Luciferium", 120, "Upgrades you...for 10 days", "https://imgs.search.brave.com/0Lz3EzwaGfG2ZqUVckTZ4hnYdBGv1fLBKwdyXzg85aA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvb3MwdXNs/enBreXc2MS5qcGc");
