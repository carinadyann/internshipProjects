// villager content setup
class Villager {
    constructor(
        img_ref = "",
        name = "Unknown",
        type = "Unknown",
        personality = "Unknown",
        gifted = "Yes",
        boxes = "No",
        time_stamp = Date.now()
    ) {
        this.img_ref = "/Assets/ankha.png";
        this.name = name;
        this.type = type;
        this.personality = personality;
        this.gifted = gifted;
        this.boxes = boxes;
        this.time_stamp = Date.now();
    }
}

class villagerRef {
    constructor(
        img_ref_indv = "",
        type_indv = "",
        personality_indv = ""
    ) {
        this.img_ref_indv = img_ref_indv;
        this.type_indv = type_indv;
        this.personality_indv = personality_indv;
    }
}

var villagerDB = new Map([
    ["Anhka", new villagerRef("/Assets/ankha.png", "Cat", "Snooty")],
    ["Apple", new villagerRef("/Assets/apple.png", "Hamster", "Peppy")],
    ["Audie", new villagerRef("/Assets/audie.png", "Wolf", "Peppy")],
    ["Cherry", new villagerRef("/Assets/cherry.png", "Dog", "Sisterly")],
    ["Diana", new villagerRef("/Assets/diana.png", "Deer", "Snooty")],
    ["Gayle", new villagerRef("/Assets/gayle.png", "Alligator", "Normal")],
    ["Lucky", new villagerRef("/Assets/lucky.png", "Dog", "Lazy")],
    ["Maple", new villagerRef("/Assets/maple.png", "Cub", "Normal")],
    ["Margie", new villagerRef("/Assets/margie.png", "Elephant", "Normal")],
    ["Marshal", new villagerRef("/Assets/marshal.png", "Squirrel", "Smug")],
    ["Mint", new villagerRef("/Assets/mint.png", "Squirrel", "Snooty")],
    ["Pekoe", new villagerRef("/Assets/pekoe.png", "Cub", "Normal")],
    ["Pinky", new villagerRef("/Assets/pinky.png", "Bear", "Peppy")],
    ["Poppy", new villagerRef("/Assets/poppy.png", "Squirrel", "Normal")],
    ["Punchy", new villagerRef("/Assets/punchy.png", "Cat", "Lazy")],
    ["Roald", new villagerRef("/Assets/roald.png", "Penguin", "Jock")],
    ["Apollo", new villagerRef("/Assets/apollo.png", "Eagle", "Cranky")],
])

let arrayVillagers = [
    {
        img_ref: villagerDB.get("Mint").img_ref_indv,
        name: "Mint",
        type: "Squirrel",
        personality: "Snooty",
        gifted: "Yes",
        boxes: "Yes" ,
        time_stamp: Date.now()
    },
    {
        img_ref: villagerDB.get("Roald").img_ref_indv,
        name: "Roald",
        type: "Penguin",
        personality: "Jock",
        gifted: "No",
        boxes: "Yes", 
        time_stamp: Date.now()
    },
    {
        img_ref: villagerDB.get("Punchy").img_ref_indv,
        name: "Punchy",
        type: "Cat",
        personality: "Lazy",
        gifted: "Yes",
        boxes: "No",
        time_stamp: Date.now() 
    },
]

let elGrid = document.getElementById("villagers-grid");

function createVillagerCard(villager) {
    const villagerCard = document.createElement("div");
    villagerCard.classList.add('villager-card');
    villagerCard.setAttribute("data-personality", villager.personality);
    villagerCard.setAttribute("data-type", villager.type);
    villagerCard.setAttribute("data-gifted", villager.gifted);
    villagerCard.setAttribute("data-boxes", villager.boxes);

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

    el_image.classList.add("cardContent");
    el_name.classList.add("cardContent");
    el_type.classList.add("cardContent");
    el_personality.classList.add("cardContent");
    el_gifted.classList.add("cardContent");
    el_boxes.classList.add("cardContent");

    villagerCard.appendChild(el_image);
    villagerCard.appendChild(el_name);
    villagerCard.appendChild(el_type);
    villagerCard.appendChild(el_personality);
    villagerCard.appendChild(el_gifted);
    villagerCard.appendChild(el_boxes);

    villagerCard.classList.add("villagers");

    elGrid.appendChild(villagerCard);
}

function updateGrid() {
    elGrid.innerHTML = "";
    arrayVillagers.forEach((villager) => {
        createVillagerCard(villager);
    });
}

function addNewVillager() {
    const newVillager = new Villager();
    const formName = String(document.getElementById("vname").value);

    newVillager.img_ref = villagerDB.get(formName).img_ref_indv;
    newVillager.name = formName;
    newVillager.type = villagerDB.get(formName).type_indv;
    newVillager.personality = villagerDB.get(formName).personality_indv;

    var giftGroup = document.getElementsByName("gifted");
    var checkGifted = Array.from(giftGroup).find(
        (radio) => radio.checked
    );
    newVillager.gifted = checkGifted.value;

    var boxGroup = document.getElementsByName("boxes");
    var checkBoxes = Array.from(boxGroup).find(
        (radio) => radio.checked
    );
    newVillager.boxes = checkBoxes.value;

    arrayVillagers.push(newVillager);
    updateGrid();
}

// select update
function autoFillTraits(sel) {
    var selected = String(sel.options[sel.selectedIndex].text);
    document.getElementById("typeAuto").innerHTML = villagerDB.get(selected).type_indv;
    document.getElementById("personalityAuto").innerHTML = villagerDB.get(selected).personality_indv;
}

function sortVillagers(sel) {
    console.log(sel.options[sel.selectedIndex].value);
    switch(String(sel.options[sel.selectedIndex].value)) {
        case "ascending":
            arrayVillagers.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();

                if(fa < fb) {
                    return -1;
                }
                else if(fa > fb) {
                    return 1;
                }
                 else {
                     return 0;
                }
            });
        case "descending":
            arrayVillagers.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();

                if(fa < fb) {
                    return -1;
                }
                else if(fa > fb) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            arrayVillagers.reverse();
        case "newest":
            arrayVillagers.sort((a, b) => {
                return b.time_stamp - a.time_stamp;
            });
        case "oldest":
            arrayVillagers.sort((a, b) => {
                return b.time_stamp - a.time_stamp;
            });
            arrayVillagers.reverse();
        case "typeA":
            arrayVillagers.sort((a, b) => {
                let fa = a.type.toLowerCase();
                let fb = b.type.toLowerCase();

                if(fa < fb) {
                    return -1;
                }
                else if(fa > fb) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        case "typeD":
            arrayVillagers.sort((a, b) => {
                let fa = a.type.toLowerCase();
                let fb = b.type.toLowerCase();

                if(fa < fb) {
                    return -1;
                }
                else if(fa > fb) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            arrayVillagers.reverse();
        default:
            // arrayVillagers.sort((a, b) => {
            //     let fa = a.name.toLowerCase();
            //     let fb = b.name.toLocaleLowerCase();

            //     if(fa < fb) {
            //         return -1;
            //     }
            //     else if(fa > fb) {
            //         return 1;
            //     }
            //     else {
            //         return 0;
            //     }
            // });
    }
    updateGrid();
    console.log(arrayVillagers);
}

// modal setup
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementById("subBtn");

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

submit.onclick = function() {
    modal.style.display = "none";
    // document.getElementById("myForm").reset();
}

// accordian animation setup
var acc = document.getElementsByClassName("accordian");
for (let i = 0; i < acc.length; i++) {
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

function applyFiltering() {
    resetFilters();
    filter = {};

    $(".filters").each(function() {
        filter[`${this.id}`] = $("input:checked", $(this)).val();

    });

    console.log(filter);

    //console.log(filter['personalityFilter']);
    //console.log(filter['typeFilter']);
    //console.log(filter['giftedFilter']);
    //console.log(filter['boxedFilter']);

    //let hiddenVillagers = $(".villager-card[data-personality!=" + filter.personalityFilter + "][data-type!=" + filter.typeFilter + "][data-gifted!=" + filter.giftedFilter + "][data-boxes!=" + filter.boxesFilter + "]");

    let hiddenVillagers = $(".villager-card");

    console.log(filter.personalityFilter);

    hiddenVillagers.filter("[data-personality != '" + filter.personalityFilter +"']");

    console.log(hiddenVillagers);
    
    hiddenVillagers.addClass('hidden');

}

function resetFilters() {
    $("div.villager-card").removeClass("hidden");
}