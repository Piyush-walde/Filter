let products=[

    {
        id:1,
        names:"Maggie Noodles",
        price:10,
        category:"Food",
        quantity:150,
        pic:"https://p7.hiclipart.com/preview/787/1007/644/instant-noodle-indian-cuisine-maggi-noodles-masala-chai.jpg"

    },
   
    
    
    {
        id:2,
        names:"Cocacola",
        price:40,
        category:"Drink",
        quantity:200,
        pic:"https://w1.pngwing.com/pngs/940/1013/png-transparent-coca-cola-fizzy-drinks-cocacola-diet-coke-cocacola-zero-sugar-cocacola-life-coca-cola-drink-supermarket.png"

    },



    {
        id:3,
        names:"Amul Cheese",
        price:90,
        category:"dairy",
        quantity:70,
        pic:"https://indi-mart.com/wp-content/uploads/2021/07/cheese-block-500-gm.png"

    },

    {
        id:4,
        names:"Gatorade Energy Drink",
        price:70,
        category:"Drink",
        quantity:50,
        pic:"https://www.pngfind.com/pngs/m/152-1527499_gatorade-drink-hd-png-download.png"

    },

    {
        id:5,
        names:"Go Cheese",
        price:150,
        category:"Dairy",
        quantity:30,
        pic:"https://www.gocheese.in/wp-content/themes/gocheese/images/go_pizza_cheese.png"

    }
]

function displayData(arr){

    document.getElementById("data").innerHTML="";

    arr.forEach((product,index) => {

        let row=document.createElement("tr");

        let numberTd=document.createElement("td");
        numberTd.append(index+1)

        let namesTd=document.createElement("td");
        namesTd.append(product.names);
        
        
        let priceTd=document.createElement("td");
        priceTd.append(product.price);
        
        let categoryTd=document.createElement("td");
        categoryTd.append(product.category);

        let quantityTd=document.createElement("td");
        quantityTd.append(product.quantity);

        let picTd=document.createElement("td");
        let proPic=document.createElement("img");
        proPic.setAttribute("src",product.pic);
        picTd.appendChild(proPic);

        row.appendChild(numberTd);
        row.appendChild(namesTd);
        row.appendChild(priceTd);
        row.appendChild(categoryTd);
        row.appendChild(quantityTd);
        row.appendChild(picTd); 


        document.getElementById("data").appendChild(row);


    });
}

displayData(products);

let filter_status=false;
function openFilterSection(){
    if(filter_status===false){
        document.getElementById("filter_box").style.marginLeft="0px";
        filter_status=true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft="-30%";
        filter_status=false;
    }
  
}

let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null

}


function setFilters(property,value){
    if(value!==""){
        filters[property]=value;

        if(property==="minPrice"){
            document.getElementById("maxPrice").min=Number(value)+1;
            document.getElementById("lowMaxPriceLable").innerText=Number(value)+1;
        }
    }
    else{
        filters[property]=null;
    }
     console.log(filters); 
}


function filter(){
          let filteredData=products;
         
          if(filters.category!==null){
             filteredData=filteredData.filter((product,index)=>{
                 return product.category.toUpperCase()===filters.category.toUpperCase();
             })
          }

          if(filters.quantity!==null){
              filteredData=filteredData.filter((product,index)=>{
                  return Number(filters.quantity)>=product.quantity;
              })
          }
           
          if(filters.minPrice!==null){
            filteredData=filteredData.filter((product,index)=>{
                return Number(filters.minPrice)<=product.price;
            })
        }

        if(filters.maxPrice!==null){
            filteredData=filteredData.filter((product,index)=>{
                return Number(filters.maxPrice)>=product.price;
            })
        }

        displayData(filteredData)
    
}


















// let arr=[23,25,25,24,64,65444,76]
// let data=arr.filter((num,index)=>{
//     return num===25;
// }) 
// console.log(data);






