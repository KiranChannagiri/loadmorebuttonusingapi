let conatiner = document.querySelector(".conatiner");
let button = document.querySelector(".button");
let skip = 0;
async function datafromserver() {
  let response = await fetch(`https://dummyjson.com/products?limit=21&skip=${skip}`);
  let data = await response.json();
  console.log(data);
  let producntlist = data.products;
  console.log(producntlist);
  producntlist.forEach((sproduct) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let ptitle = document.createElement("p");
    let pbrand = document.createElement("p");
    div.className = "boxes";
    img.src = sproduct.thumbnail;
    img.className = "images";
    ptitle.textContent = sproduct.title;
    ptitle.className = "ptitle";
    pbrand.textContent = sproduct.brand;
    pbrand.className = "pbrand";
    div.append(img, ptitle, pbrand);
    conatiner.appendChild(div);
  });
}
datafromserver();
button.addEventListener("click",()=>
{
    skip = skip+21;
    console.log(skip);
    datafromserver();
})