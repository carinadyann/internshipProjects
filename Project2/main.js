// villager content setup
class Villager {
    constructor(
        img_ref = "",
        name = "Unknown",
        type = "Unknown",
        personality = "Unknown",
        gifted = "Yes",
        boxes = "No"
    ) {
        this.img_ref = villagerImg.get(name);
        this.name = name;
        this.type = type;
        this.personality = personality;
        this.gifted = gifted;
        this.boxes = boxes;
    }
}

var villagerImg = new Map([
    ["Anhka", "/Assets/ankha.png"],
    ["Apple", "/Assets/apple.png"],
    ["Audie", "/Assets/audie.png"],
    ["Cherry", "/Assets/cherry.png"],
    ["Diana", "/Assets/diana.png"],
    ["Gayle", "/Assets/gayle.png"],
    ["Lucky", "/Assets/lucky.png"],
    ["Maple", "/Assets/maple.png"],
    ["Margie", "/Assets/margie.png"],
    ["Marshal", "/Assets/marshal.png"],
    ["Mint", "/Assets/mint.png"],
    ["Pekoe", "/Assets/pekoe.png"],
    ["Pinky", "/Assets/pinky.png"],
    ["Poppy", "/Assets/poppy.png"],
    ["Punchy", "/Assets/punchy.png"],
    ["Roald", "/Assets/roald.png"],
    ["Apollo", "/Assets/apollo.png"],
])

let arrayVillagers = [
    {
        img_ref: villagerImg.get("Mint"),
        name: "Mint",
        type: "Squirrel",
        personality: "Snooty",
        gifted: "Yes",
        boxes: "Yes" 
    },
    {
        img_ref: villagerImg.get("Roald"),
        name: "Roald",
        type: "Penguin",
        personality: "Jock",
        gifted: "No",
        boxes: "Yes" 
    },
    {
        img_ref: villagerImg.get("Punchy"),
        name: "Punchy",
        type: "Cat",
        personality: "Lazy",
        gifted: "Yes",
        boxes: "No" 
    },
]

let elGrid = document.getElementById("villagers-grid");

function createVillagers(villager) {
    const villagerCard = document.createElement("div");
    //villagerCard.classList.add('villager-card')

    const el_image = document.createElement("img");
    el_image.classList.add("vProfile");

    const el_name = document.createElement("p");
    el_name.classList.add("name");

    const el_type = document.createElement("p");
    const el_personality = document.createElement("p");
    const el_gifted = document.createElement("p");
    const el_boxes = document.createElement("p");

    el_image.setAttribute("src", villager.img_ref);
    el_name.textContent = villager.name;
    el_type.textContent = `Type: ${villager.type}`;
    el_personality.textContent = `Personality: ${villager.personality}`;
    el_gifted.textContent = `Gifted: ${villager.gifted}`;
    el_boxes.textContent = `In Boxes: ${villager.boxes}`;

    villagerCard.appendChild(el_image);
    villagerCard.appendChild(el_name);
    villagerCard.appendChild(el_type);
    villagerCard.appendChild(el_personality);
    villagerCard.appendChild(el_gifted);
    villagerCard.appendChild(el_boxes);
    elGrid.appendChild(villagerCard);

    el_image.classList.add("cardContent");
    el_name.classList.add("cardContent");
    el_type.classList.add("cardContent");
    el_personality.classList.add("cardContent");
    el_gifted.classList.add("cardContent");
    el_boxes.classList.add("cardContent");

    villagerCard.classList.add("villagers");
}

function updateGrid() {
    arrayVillagers.forEach((villager) => {
        createVillagers(villager)
    });
}

function addNewVillager() {
    const newVillager = new Object();
    newVillager.name = document.getElementById(""); // not done

    updateGrid();
}

updateGrid();

// modal setup
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// accordian animation setup
var acc = document.getElementsByClassName("accordian");
var i;

for (i = 0; acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}