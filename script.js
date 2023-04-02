const flowers = [
  {
    imgLink:
      "https://toanthaydinh.com/wp-content/uploads/2020/04/bo-hoa-hong-do-75b7e6253aa816_07da601775e64b7cd731823aeb63dc04-599x800-2.jpg",
    name: "Rose",
    price: "100 000 VND",
  },
  {
    imgLink:
      "https://cdn.shopeesales.com/2020/02/bo-hoa-cam-tay-co-dau-min.jpg",
    name: "Sunflower",
    price: "200 000 VND",
  },
  {
    imgLink:
      "https://huongflower.com/wp-content/uploads/2020/03/Fs1.1-large.jpg",
    name: "Baby flower",
    price: "10 000 VND",
  },
  {
    imgLink:
      "https://image-us.eva.vn/upload/3-2022/images/2022-08-26/image14-1661500032-713-width1472height1738.jpg",
    name: "Chrysanthemum",
    price: "100 000 VND",
  },
];

function render(flowers) {
  const flowerDOM = document.getElementById("flower");
  flowerDOM.innerHTML = "";
  for (let i = 0; i < flowers.length; i++) {
    const content = `
        <a class="item" href="./detail.html">
        <div class="item_img">
          <img
            src="${flowers[i]["imgLink"]}"
            alt=""
          />
        </div>
        <div class="item_content">
          <h3>${flowers[i]["name"]}</h3>
          <p>Price : ${flowers[i]["price"]}</p>
        </div>
      </a>
        `;
    flowerDOM.innerHTML = flowerDOM.innerHTML + content;
  }
}

render(flowers);

document
  .getElementById("search")
  .addEventListener("input", function handleSearch(e) {
    const targetItem = e.target.value;
    const newFlowers = removeExcept(targetItem, flowers);
    render(newFlowers);
  });

function removeExcept(targetItem, flowers) {
  let arr = [];
  for (let i = 0; i < flowers.length; i++)
    if (flowers[i]["name"].toLowerCase().includes(targetItem))
      arr.push(flowers[i].toLowerCase());
  return arr;
}
