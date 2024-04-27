const clothes = [
  { name: "T-shirt", type: "Shirt", color: "White", size: "M", price: 20 },
  { name: "Jeans", type: "Pants", color: "Blue", size: "32/32", price: 50 },
  { name: "Hoodie", type: "Sweatshirt", color: "Black", size: "L", price: 40 },
  {
    name: "Dress Shirt",
    type: "Shirt",
    color: "Striped",
    size: "S",
    price: 30,
  },
  { name: "Skirt", type: "Skirt", color: "Red", size: "XS", price: 25 },
  { name: "Jacket", type: "Outerwear", color: "Gray", size: "XL", price: 60 },
  { name: "Sweater", type: "Sweatshirt", color: "Green", size: "M", price: 45 },
  { name: "Shorts", type: "Pants", color: "Khaki", size: "30", price: 25 },
  { name: "Blouse", type: "Shirt", color: "Pink", size: "M", price: 35 },
  { name: "Coat", type: "Outerwear", color: "Navy", size: "L", price: 70 },
  { name: "Dress", type: "Dress", color: "Black", size: "M", price: 55 },
  { name: "Sweatpants", type: "Pants", color: "Gray", size: "L", price: 30 },
  { name: "Cardigan", type: "Sweater", color: "Blue", size: "S", price: 40 },
  { name: "Tank Top", type: "Shirt", color: "Yellow", size: "XS", price: 15 },
  {
    name: "Cargo Pants",
    type: "Pants",
    color: "Olive",
    size: "34/32",
    price: 45,
  },
  { name: "Peacoat", type: "Outerwear", color: "Navy", size: "M", price: 65 },
  { name: "Maxi Dress", type: "Dress", color: "Floral", size: "L", price: 60 },
  { name: "Polo Shirt", type: "Shirt", color: "Blue", size: "M", price: 25 },
  { name: "Leggings", type: "Pants", color: "Black", size: "S", price: 20 },
  {
    name: "Rain Jacket",
    type: "Outerwear",
    color: "Yellow",
    size: "L",
    price: 55,
  },
  { name: "Crop Top", type: "Shirt", color: "White", size: "S", price: 20 },
  { name: "Chinos", type: "Pants", color: "Beige", size: "32/30", price: 35 },
  {
    name: "Sweatshirt",
    type: "Sweatshirt",
    color: "Red",
    size: "XL",
    price: 40,
  },
  {
    name: "Trench Coat",
    type: "Outerwear",
    color: "Beige",
    size: "M",
    price: 75,
  },
  {
    name: "Denim Jacket",
    type: "Outerwear",
    color: "Denim",
    size: "L",
    price: 50,
  },
  {
    name: "V-neck Sweater",
    type: "Sweater",
    color: "Gray",
    size: "M",
    price: 35,
  },
  {
    name: "Cargo Shorts",
    type: "Shorts",
    color: "Camouflage",
    size: "34",
    price: 30,
  },
  {
    name: "Button-up Shirt",
    type: "Shirt",
    color: "Plaid",
    size: "L",
    price: 30,
  },
  {
    name: "Puffer Jacket",
    type: "Outerwear",
    color: "Black",
    size: "XL",
    price: 70,
  },
  { name: "Joggers", type: "Pants", color: "Navy", size: "M", price: 30 },
  { name: "Pencil Skirt", type: "Skirt", color: "Black", size: "S", price: 25 },
];

function displayClothes(filterClothes) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  filterClothes.forEach((cloth) => {
    let div = document.createElement("div");
    div.id = "clothes";
    div.innerHTML = `${cloth.name} <br><br> Color:${cloth.color} <br><br>Size:${cloth.size}<br><br> Price: $${cloth.price}`;
    container.appendChild(div);
  });
}

function filterByInput(name) {
  const filterClothes = clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(name.toLowerCase())
  );
  displayClothes(filterClothes);
}

const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", function () {
  filterByInput(this.value);
});

displayClothes(clothes);
