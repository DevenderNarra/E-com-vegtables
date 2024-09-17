const foodItem = [{
    id: 1,
    name: "Spinach",
    category: "leafGreeny",
    rating: 4.3,
    price: 20,
    img: "https://healthybuddha.in/image/cache/catalog/Spinach-500x515.jpg",
    quantity: 1
},
{
    id: 2,
    name: "Coriander",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/0017/9234/4153/products/corinder_leaves_1024x1024@2x.jpg?v=1559416353",
    quantity: 1
},
{
    id: 3,
    name: "Lettuce",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg",
    quantity: 1
},
{
    id: 4,
    name: "Silver Beet",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://www.australianseed.com/auto/thumbnail/persistent/catalogue_images/products/silverbeet-giant-fordhook-swiss-chard.jpg?",
    quantity: 1
},
{
    id: 5,
    name: "Arugula",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://5.imimg.com/data5/XJ/GD/MY-27762041/arugula-28rocket-leaves-29-500x500.jpg",
    quantity: 1
},
{
    id: 6,
    name: "Collard greens",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/277/277957/collard-greens-contain-many-nutrients.jpg",
    quantity: 1
},
{
    id: 7,
    name: "Kale",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgVqxbNpbg3Lv12kH3pzifdw7Uik5wUbCYQ&usqp=CAU",
    quantity: 1
},
{
    id: 8,
    name: "Thotakura",
    category: "leafGreeny",
    rating: 4.3,
    price: 13,
    img: "https://qph.cf2.quoracdn.net/main-qimg-aeabbb9d046e2fd2b52330ec235ae258-lq",
    quantity: 1
},
{
    id: 9,
    name: "Cabbage",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://www.villamart.in/files/Cabbage.jpg",
    quantity: 1
},
{
    id: 10,
    name: "Cauliflower",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://5.imimg.com/data5/IE/YN/MY-51545753/sg-cauliflower-2c-1nos-500x500.png",
    quantity: 1
},
{
    id: 11,
    name: "Broccoli",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQZrP_28uDRPTZXvZrK5jTfI5qOHfWcV0-nezjzt1Jz5C9oP7LvNJN_JNjJp8hRwbeg8vonNSlrW8E3iCM",
    quantity: 1
},
{
    id: 12,
    name: "Radhish",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://seed2plant.in/cdn/shop/products/whiteradish_800x.jpg?v=1611836380",
    quantity: 1
},
{
    id: 13,
    name: "Red Radhish",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://images.healthshots.com/healthshots/en/uploads/2022/01/11160113/red-radish-370x207.jpg",
    quantity: 1
},
{
    id: 14,
    name: "Brussels Sprouts",
    category: "cruciferous",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzntmTEk0voyGxvb_qjIkPNHVdWrS29Kz4A&usqp=CAU",
    quantity: 1
},
{
    id: 15,
    name: "Cucumber",
    category: "marrow",
    rating: 4.3,
    price: 13,
    img: "https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556",
    quantity: 1
},
{
    id: 16,
    name: "Cantaloupe",
    category: "marrow",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSjlYNXCq9h6VSrDaMrOrJS5B57fuEneDyK2YJSly7a3gbN1JQo2K5kI78lj63RpBjj08JqbD7o5jQOCdI",
    quantity: 1
},
{
    id: 17,
    name: "Pumpkin",
    category: "marrow",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcn7cnkg3oD8mBL_RjeAQqPVuT1t7buNgKg&usqp=CAU",
    quantity: 1
},
{
    id: 18,
    name: "Potatoes",
    category: "root",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQhL8Y6-d7ysCV-CW_MFlLm1yPtXExm7Zi2dhR9ufs88tRKNXF1m0mdX7f5f9bfgiQryu4FIiwn96wb2gY",
    quantity: 1
},
{
    id: 19,
    name: "Carrots",
    category: "root",
    rating: 4.3,
    price: 13,
    img: "https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-5-809x1024.jpg",
    quantity: 1
},
{
    id: 20,
    name: "Beets",
    category: "root",
    rating: 3.3,
    price: 13,
    img: "https://draxe.com/wp-content/uploads/2018/04/DrAxeBeetBenefitsHeader.jpg",
    quantity: 1
},
{
    id: 21,
    name: "Turnip",
    category: "root",
    rating: 4.3,
    price: 13,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/800px-Turnip_2622027.jpg",
    quantity: 1
},
{
    id: 22,
    name: "Parsnips",
    category: "root",
    rating: 3.0,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kXruC8UBn_nxvdXd17w5HnatIg0HlQezIw&usqp=CAU",
    quantity: 1
},
{
    id: 23,
    name: "Onion",
    category: "root",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dqqJyEXA3pZkqpfFWQPnMkFPuhzI2TtZ-g&usqp=CAU",
    quantity: 1
},
{
    id: 24,
    name: "Sweet Potatoes",
    category: "root",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/0017/9234/4153/products/sweet_p_1024x1024@2x.png?v=1562948162",
    quantity: 1
},
{
    id: 25,
    name: "Sugar Cane",
    category: "edible",
    rating: 4.3,
    price: 13,
    img: "",
    quantity: 1
},
{
    id: 26,
    name: "Bamboo Shoot",
    category: "edible",
    rating: 4.3,
    price: 13,
    img: "https://thumbs.dreamstime.com/b/bamboo-shoot-shoots-rain-season-117209778.jpg",
    quantity: 1
},
{
    id: 27,
    name: "Fennel",
    category: "edible",
    rating: 4.3,
    price: 13,
    img: "https://www.simplyrecipes.com/thmb/W4S8OLKVQUsIoifDNyxNbpnKWWc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-How-to-Cut-Fennel-LEAD-4-6b185e5795f74a5faffecf87ff69ee0f.jpg",
    quantity: 1
},
{
    id: 28,
    name: "Garlic",
    category: "allium",
    rating: 4.3,
    price: 13,
    img: "https://img.taste.com.au/fhWsOBXr/w720-h480-cfill-q80/taste/2007/10/garlic-182553-1.jpg",
    quantity: 1
},
{
    id: 29,
    name: "Chives",
    category: "allium",
    rating: 4.3,
    price: 13,
    img: "https://www.netmeds.com/images/cms/wysiwyg/blog/2021/08/1629706399_chives_big_450.jpg",
    quantity: 1
},
{
    id: 30,
    name: "Leeks",
    category: "allium",
    rating: 4.3,
    price: 13,
    img: "https://post.healthline.com/wp-content/uploads/2020/08/leek-benefits-1200x628-facebook-1200x628.jpg",
    quantity: 1
},
{
    id: 31,
    name: "Brinjal",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHWxY6IlY7uFkT_rsS3abIicE8rk9WlFrm4CEY_O1VD1eHgAun2R5vxM&s",
    quantity: 1
},
{
    id: 32,
    name: "Bitter gourd",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ3Du94KgHrh5OhUKCaZyUT2KIf6_7ctIRu3fy_t56PN_1AAxC0xtGVY3o9gL8KalrdXU5TRJJGGzgYA7s",
    quantity: 1
},
{
    id: 33,
    name: "Snake gourd",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://i0.wp.com/plantcraft.in/wp-content/uploads/2020/12/Snake-gourd-plant.jpg?fit=500%2C430&ssl=1",
    quantity: 1
},
{
    id: 34,
    name: "Ridge Gourd",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/0475/8398/5816/products/1LyX5_iDDeEJMwgIEAFM4xCtksG33PXtk_4531768c-2620-400b-8b74-9974a4c66f25_1125x700.jpg?v=1608550598",
    quantity: 1
},
{
    id: 35,
    name: "Bottle gourd",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/22134631/22.jpg",
    quantity: 1
},
{
    id: 36,
    name: "Cluster beans",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-guar-phali-f1-hybrid-cluster-beans-vegetable-seeds-16969075032204.jpg?v=1634204010",
    quantity: 1
},
{
    id: 37,
    name: "Tindoora",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://i0.wp.com/sybaritica.me/wp-content/uploads/2020/10/Tindora-The-Ivy-Gourd-02.jpg?fit=1000%2C661&ssl=1",
    quantity: 1
},
{
    id: 38,
    name: "Okra",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://images.indianexpress.com/2023/02/bindi_getty1200_HS.jpg",
    quantity: 1
},
{
    id: 39,
    name: "Raw jackfruit",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://kisangreenmart.in/wp-content/uploads/2020/09/jackfruit-2.jpg",
    quantity: 1
},
{
    id: 40,
    name: "Drumstick",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/24230343/7-1.jpg",
    quantity: 1
},
{
    id: 41,
    name: "Chinese Spinach",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://qph.cf2.quoracdn.net/main-qimg-c7cdde5c4dce8b9ff9c534ba40fd8766-lq",
    quantity: 1
},
{
    id: 42,
    name: "Sorrel leaves",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAb-yiQROZtgGQAjK84L2GYjepULb8vw4beA&usqp=CAU",
    quantity: 1
},
{
    id: 43,
    name: "Curry Leaves",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://www.bloomybliss.com/wp-content/uploads/2022/06/curryleaf_1056x.jpg",
    quantity: 1
},
{
    id: 44,
    name: "Menthi Kura",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://www.chaipakodi.com/wp-content/uploads/2021/07/fenugreek-leaves.jpg",
    quantity: 1
},
{
    id: 45,
    name: "Green Chilli",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic-Green-Chilli_large_large_4410288b-ff46-4d7d-8e6b-f9c5775a0d27.jpg?v=1571986449",
    quantity: 1
},
{
    id: 46,
    name: "Ash Gourd",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://cdn.shopify.com/s/files/1/2297/2851/products/Ashgourdper1kg_700x700.png?v=1594102817",
    quantity: 1
},
{
    id: 47,
    name: "Colacasia",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://m.media-amazon.com/images/I/41xujaiPi2L.jpg",
    quantity: 1
},
{
    id: 48,
    name: "Tomato",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=2owPswip",
    quantity: 1
},
{
    id: 49,
    name: "Broad beans",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://m.media-amazon.com/images/I/81YUKN2IAgS._SX425_.jpg",
    quantity: 1
},
{
    id: 50,
    name: "Pea",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://theleafandclay.com/wp-content/uploads/2021/07/Peas-Image.png",
    quantity: 1
},
{
    id: 51,
    name: "Taro root",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EtpApX5sYmdxkbBVd8NMdRyo6THGTiA_Hw&usqp=CAU",
    quantity: 1
},
{
    id: 52,
    name: "Capsicum",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://www.jiomart.com/images/product/600x600/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg",
    quantity: 1
},
{
    id: 53,
    name: "Red Chilli",
    category: "local",
    rating: 4.3,
    price: 13,
    img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/chillies-red.jpg",
    quantity: 1
},
]

function displayItems() {
var leafGreeny = document.getElementById('leafGreeny');
var cruciferous = document.getElementById('cruciferous');
var marrow = document.getElementById('marrow');
var root = document.getElementById('root');
var edible = document.getElementById('edible');
var allium = document.getElementById('allium');
var local = document.getElementById('local');



const leafGreenyData = foodItem.filter((item) => item.category === 'leafGreeny');
const cruciferousData = foodItem.filter((item) => item.category === 'cruciferous');
const marrowData = foodItem.filter((item) => item.category === 'marrow');
const rootData = foodItem.filter((item) => item.category === 'root');
const edibleData = foodItem.filter((item) => item.category === 'edible');
const alliumData = foodItem.filter((item) => item.category === 'allium');
const localData = foodItem.filter((item) => item.category === 'local');
leafGreenyData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    leafGreeny.appendChild(itemCard);

});

cruciferousData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price : ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    cruciferous.appendChild(itemCard);

});

marrowData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    marrow.appendChild(itemCard);

});

rootData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card');

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id)

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    root.appendChild(itemCard);

});

edibleData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card')

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id)

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    edible.appendChild(itemCard);

});

alliumData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card')

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id)

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    allium.appendChild(itemCard);

});

localData.map(item => {

    var itemCard = document.createElement('div');
    itemCard.setAttribute('id', 'item-card')

    var cardTop = document.createElement('div');
    cardTop.setAttribute('id', 'card-top');

    var star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    star.setAttribute('id', 'rating');
    star.innerText = ' ' + item.rating;

    var heart = document.createElement('i');
    heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
    heart.setAttribute('id', item.id)

    cardTop.appendChild(star);
    cardTop.appendChild(heart);


    var img = document.createElement('img');
    img.src = item.img;

    var itemName = document.createElement('p');
    itemName.setAttribute('id', 'item-name');
    itemName.innerText = item.name;

    var itemPrice = document.createElement('p');
    itemPrice.setAttribute('id', 'item-price');
    itemPrice.innerText = 'Price :  ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    local.appendChild(itemCard);
});
}
displayItems();

const vegData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(vegData);

function selectTaste() {
var categoryList = document.getElementById('category-list');

vegData.map(item => {
    console.log(item)
    var listCard = document.createElement('div');
    listCard.setAttribute('class', 'list-card');

    var listImg = document.createElement('img');
    listImg.src = item.img;

    var listName = document.createElement('a');
    listName.setAttribute('class', 'list-name');
    listName.innerText = item.category;
    listName.setAttribute('href', '#' + item.category)

    listCard.appendChild(listImg);
    listCard.appendChild(listName);

    var cloneListCard = listCard.cloneNode(true);
    categoryList.appendChild(listCard);
})
}
selectTaste();

document.querySelectorAll('.add-to-cart').forEach(item => {
item.addEventListener('click', addToCart)
})

var cartData = [];

function addToCart() {

var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
var itemObj = foodItem.find(element => element.name == itemToAdd);

var index = cartData.indexOf(itemObj);
if (index === -1) {
    document.getElementById(itemObj.id).classList.add('toggle-heart');
    cartData = [...cartData, itemObj];
} else if (index > -1) {
    alert("Added to cart!");
}

document.getElementById('cart-plus').innerText =
    ' ' + cartData.length + ' Items';
document.getElementById('m-cart-plus').innerText =
    ' ' + cartData.length;
totalAmount();
cartItems();
}

function cartItems() {
var tableBody = document.getElementById('table-body');
tableBody.innerHTML = '';

cartData.map(item => {
    var tableRow = document.createElement('tr');

    var rowData1 = document.createElement('td');
    var img = document.createElement('img');
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement('td');
    rowData2.innerText = item.name;

    var rowData3 = document.createElement('td');
    var btn1 = document.createElement('button');
    btn1.setAttribute('class', 'decrease-item');
    btn1.innerText = '-';
    var span = document.createElement('span');
    span.innerText = item.quantity;
    var btn2 = document.createElement('button');
    btn2.setAttribute('class', 'increase-item');
    btn2.innerText = '+';

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement('td');
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
})
document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', incrementItem)
})

document.querySelectorAll('.decrease-item').forEach(item => {
    item.addEventListener('click', decrementItem)
})
}


function incrementItem() {
let itemToInc = this.parentNode.previousSibling.innerText;
console.log(itemToInc)
var incObj = cartData.find(element => element.name == itemToInc);
incObj.quantity += 1;

currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
incObj.price = currPrice * incObj.quantity;
totalAmount()
cartItems();
}

var currPrice = 0;

function decrementItem() {
let itemToInc = this.parentNode.previousSibling.innerText;
let decObj = cartData.find(element => element.name == itemToInc);
let ind = cartData.indexOf(decObj);
if (decObj.quantity > 1) {
    currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
} else {
    document.getElementById(decObj.id).classList.remove('toggle-heart')
    cartData.splice(ind, 1);
    document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
    if (cartData.length < 1 && flag) {
        document.getElementById('veg-items').classList.toggle('veg-items');
        document.getElementById('category-list').classList.toggle('veg-items');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = false;
        alert("Currently no item in cart!");
        console.log(flag)
    }
}
totalAmount()
cartItems()
}

function totalAmount() {
var sum = 0;
cartData.map(item => {
    sum += item.price;
})
document.getElementById('total-item').innerText = 'Total Items : ' + cartData.length;
document.getElementById('total-price').innerText = 'Total Price :  ' + sum;
document.getElementById('m-total-amount').innerText = 'Total Price :  ' + sum;
}

document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

var flag = false;

function cartToggle() {
if (cartData.length > 0) {
    document.getElementById('veg-items').classList.toggle('veg-items');
    document.getElementById('category-list').classList.toggle('food-items');
    document.getElementById('category-header').classList.toggle('toggle-category');
    document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
    document.getElementById('cart-page').classList.toggle('cart-toggle');
    document.getElementById('checkout').classList.toggle('cart-toggle');
    flag = true;
    console.log(flag)
} else {
    alert("Currently no item in cart!");
}
}



// registartion and login

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
x.style.left = "-450px";
y.style.left = "50px";
z.style.left = "110px";
}

function login() {
x.style.left = "50px";
y.style.left = "450px";
z.style.left = "0px";
}

window.onresize = window.onload = function() {
var size = window.screen.width;
console.log(size)
if (size < 800) {
    var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
    var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
    document.getElementById('food-items').remove();
    document.getElementById('cart-page').remove();
    document.getElementById('category-header').after(cloneFoodItems);
    document.getElementById('food-items').after(cloneCartPage);
    addEvents()
}
if (size > 800) {
    var cloneFoodItems = document.getElementById('veg-items').cloneNode(true);
    document.getElementById('veg-items').remove();
    document.getElementById('header').after(cloneFoodItems);

    var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
    document.getElementById('cart-page').remove();
    document.getElementById('veg-items').after(cloneCartPage);
    addEvents()
}
}

function addEvents() {
document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
});
document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', incrementItem)
})

document.querySelectorAll('.decrease-item').forEach(item => {
    item.addEventListener('click', decrementItem)
})
}

document.getElementById('add-address').addEventListener('click', addAddress);


function addAddress() {
var address = prompt('Enter your address', '');
if (address) {
    document.getElementById('add-address').innerText = ' ' + address;
} else {
    alert("Address not added")
}
}

function offers(){
    alert("Currently No OFFERS AVAILABLE..")
}

let offersEle=document.getElementById("offers")
offersEle.addEventListener("click",offers)