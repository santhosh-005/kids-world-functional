var blueBtn=document.getElementsByClassName("bluebox");
var itemCount=document.getElementById("itemcount")
var cartIcon = document.querySelector(".cart-icon")

let totalDollars=0;
let count=0

var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7.49
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4.59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6.80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7.29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4.99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17.49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19.99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20.99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19.49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12.49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12.49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15.99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18.49,
    },
  ];

blueBtn[0].onclick=()=>{
    totalDollars+=items[0].dollars;
    items[0].quantity++;
    itemCount.innerHTML=++count;
}
blueBtn[1].onclick=()=>{
    totalDollars+=items[1].dollars;
    items[1].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[2].onclick=()=>{
    totalDollars+=items[2].dollars;
    items[2].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[3].onclick=()=>{
    totalDollars+=items[3].dollars;
    items[3].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[4].onclick=()=>{
    totalDollars+=items[4].dollars;
    items[4].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[5].onclick=()=>{
    totalDollars+=items[5].dollars;
    items[5].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[6].onclick=()=>{
    totalDollars+=items[6].dollars;
    items[6].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[7].onclick=()=>{
    totalDollars+=items[7].dollars;
    items[7].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[8].onclick=()=>{
    totalDollars+=items[8].dollars;
    items[8].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[9].onclick=()=>{
    totalDollars+=items[9].dollars;
    items[9].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[10].onclick=()=>{
    totalDollars+=items[10].dollars;
    items[10].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[11].onclick=()=>{
    totalDollars+=items[11].dollars;
    items[11].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[12].onclick=()=>{
    totalDollars+=items[12].dollars;
    items[12].quantity++
    itemCount.innerHTML=++count;
}
blueBtn[13].onclick=()=>{
    totalDollars+=items[13].dollars;
    items[13].quantity++
    itemCount.innerHTML=++count;
}


cartIcon.onclick=()=>{
    for(let element of items){
        if(element.quantity==0){
            continue;
        }else{
            console.log("Item name: "+element.name+"- Quantity: "+element.quantity)
        }
    }
    console.log("The total amount is: "+Math.floor(totalDollars)+" dollars and "+Math.floor(
    (totalDollars-Math.floor(totalDollars))*100)+" cents")
}





