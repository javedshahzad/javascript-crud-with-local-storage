
const AvailableCars = [{
        "id": 1,
        "make": "Honda",
        "model": "Civic LX",
        "color": "Red",
        "price": "15000 AUD",
        "description": "This is honda car,very good condition,clean interior and tyres.",
        "category": "Sedan",
        "image": "./assets/images/img1.png"
    },
    {
        "id": 2,
        "make": "Honda",
        "model": "Civic EX",
        "color": "White",
        "price": "23000 AUD",
        "description": "This is honda car,very good condition,clean interior and tyres.",
        "category": "Hatchback",
        "image": "./assets/images/img2.jpg"
    },
    {
        "id": 3,
        "make": "Toyota",
        "model": "Land Cruiser",
        "color": "White",
        "price": "35000 AUD",
        "description": "This is Toyota Land Cruiser 4wd car,very good condition,clean interior and tyres.",
        "category": "4WD",
        "image": "./assets/images/img3.jpg"
    },
    {
        "id": 4,
        "make": "Ferrari",
        "model": "Ferrari 812",
        "color": "Red",
        "price": "57000 AUD",
        "description": "This is Ferrari 812 car,very good condition,clean interior and tyres.",
        "category": "Sedan",
        "image": "./assets/images/img4.jpg"
    },
    {
        "id": 5,
        "make": "Ferrari",
        "model": "Ferrari 810",
        "color": "Red",
        "price": "15000 AUD",
        "description": "This is Ferrari 812 car,very good condition,clean interior and tyres.",
        "category": "Sedan",
        "image": "./assets/images/img1.png"
    },
    {
        "id": 6,
        "make": "BMW",
        "model": "BMW The iX",
        "color": "Black",
        "price": "155000 AUD",
        "description": "This is honda car,very good condition,clean interior and tyres.",
        "category": "Sedan",
        "image": "./assets/images/img5.jpg"
    },
    {
        "id": 7,
        "make": "Ferrari",
        "model": "Ferrari 812 GTS",
        "color": "Black",
        "price": "55000 AUD",
        "description": "This is Ferrari 812 GTS car,very good condition,clean interior and tyres.",
        "category": "Sedan",
        "image": "./assets/images/img6.jpg"
    },
    {
        "id": 8,
        "make": "Toyota",
        "model": "Toyota Fortuner",
        "color": "Black",
        "price": "15000 AUD",
        "description": "This is Toyota Fortuner car,very good condition,clean interior and tyres.",
        "category": "4WD",
        "image": "./assets/images/img7.jpg"
    },
    {
        "id": 9,
        "make": "Toyota",
        "model": "Toyota Prado",
        "color": "White",
        "price": "65000 AUD",
        "description": "This is Toyota Prado car,very good condition,clean interior and tyres.",
        "category": "4WD",
        "image": "./assets/images/img8.png"
    },
    {
        "id": 10,
        "make": "Kia",
        "model": "Kia Rio",
        "color": "White",
        "price": "18000 AUD",
        "description": "This is Kia Rio car,very good condition,clean interior and tyres.",
        "category": "Hatchback",
        "image": "./assets/images/img9.png"
    }
];
if (getCurrentURL().includes("index.html")) {
    // car 1
    let imageCar1 = document.getElementById('imgCar1');
    imageCar1.src = AvailableCars[0].image;
    let makeCar1 = document.getElementById('namecar1');
    makeCar1.innerHTML = AvailableCars[0].make;
    let modalcar1 = document.getElementById('modalcar1');
    modalcar1.innerHTML = AvailableCars[0].model;
    let colorcar1 = document.getElementById('colorcar1');
    colorcar1.innerHTML = AvailableCars[0].color;
    let pricecar1 = document.getElementById('pricecar1');
    pricecar1.innerHTML = AvailableCars[0].price;
    let desccar1 = document.getElementById('desccar1');
    desccar1.innerHTML = AvailableCars[0].description;
    let categorycar1 = document.getElementById('categorycar1');
    categorycar1.innerHTML = AvailableCars[0].category;
    // car 2
    let imageCar2 = document.getElementById('imgCar2');
    imageCar2.src = AvailableCars[1].image;
    let makeCar2 = document.getElementById('namecar2');
    makeCar2.innerHTML = AvailableCars[1].make;
    let modalcar2 = document.getElementById('modalcar2');
    modalcar2.innerHTML = AvailableCars[1].model;
    let colorcar2 = document.getElementById('colorcar2');
    colorcar2.innerHTML = AvailableCars[1].color;
    let pricecar2 = document.getElementById('pricecar2');
    pricecar2.innerHTML = AvailableCars[1].price;
    let desccar2 = document.getElementById('desccar2');
    desccar2.innerHTML = AvailableCars[1].description;
    let categorycar2 = document.getElementById('categorycar2');
    categorycar2.innerHTML = AvailableCars[1].category;
    // car 3
    let imageCar3 = document.getElementById('imgCar3');
    imageCar3.src = AvailableCars[2].image;
    let makeCar3 = document.getElementById('namecar3');
    makeCar3.innerHTML = AvailableCars[2].make;
    let modalcar3 = document.getElementById('modalcar3');
    modalcar3.innerHTML = AvailableCars[2].model;
    let colorcar3 = document.getElementById('colorcar3');
    colorcar3.innerHTML = AvailableCars[2].color;
    let pricecar3 = document.getElementById('pricecar3');
    pricecar3.innerHTML = AvailableCars[2].price;
    let desccar3 = document.getElementById('desccar3');
    desccar3.innerHTML = AvailableCars[2].description;
    let categorycar3 = document.getElementById('categorycar3');
    categorycar3.innerHTML = AvailableCars[2].category;
    // car 4
    let imageCar4 = document.getElementById('imgCar4');
    imageCar4.src = AvailableCars[3].image;
    let makeCar4 = document.getElementById('namecar4');
    makeCar4.innerHTML = AvailableCars[3].make;
    let modalcar4 = document.getElementById('modalcar4');
    modalcar4.innerHTML = AvailableCars[3].model;
    let colorcar4 = document.getElementById('colorcar4');
    colorcar4.innerHTML = AvailableCars[3].color;
    let pricecar4 = document.getElementById('pricecar4');
    pricecar4.innerHTML = AvailableCars[3].price;
    let desccar4 = document.getElementById('desccar4');
    desccar4.innerHTML = AvailableCars[3].description;
    let categorycar4 = document.getElementById('categorycar4');
    categorycar4.innerHTML = AvailableCars[3].category;
    // car 5
    let imageCar5 = document.getElementById('imgCar5');
    imageCar5.src = AvailableCars[4].image;
    let makeCar5 = document.getElementById('namecar5');
    makeCar5.innerHTML = AvailableCars[4].make;
    let modalcar5 = document.getElementById('modalcar5');
    modalcar5.innerHTML = AvailableCars[4].model;
    let colorcar5 = document.getElementById('colorcar5');
    colorcar5.innerHTML = AvailableCars[4].color;
    let pricecar5 = document.getElementById('pricecar5');
    pricecar5.innerHTML = AvailableCars[4].price;
    let desccar5 = document.getElementById('desccar5');
    desccar5.innerHTML = AvailableCars[4].description;
    let categorycar5 = document.getElementById('categorycar5');
    categorycar5.innerHTML = AvailableCars[4].category;
    // car 6
    let imageCar6 = document.getElementById('imgCar6');
    imageCar6.src = AvailableCars[5].image;
    let makeCar6 = document.getElementById('namecar6');
    makeCar6.innerHTML = AvailableCars[5].make;
    let modalcar6 = document.getElementById('modalcar6');
    modalcar6.innerHTML = AvailableCars[5].model;
    let colorcar6 = document.getElementById('colorcar6');
    colorcar6.innerHTML = AvailableCars[5].color;
    let pricecar6 = document.getElementById('pricecar6');
    pricecar6.innerHTML = AvailableCars[5].price;
    let desccar6 = document.getElementById('desccar6');
    desccar6.innerHTML = AvailableCars[5].description;
    let categorycar6 = document.getElementById('categorycar6');
    categorycar6.innerHTML = AvailableCars[5].category;
    // car 7
    let imageCar7 = document.getElementById('imgCar7');
    imageCar7.src = AvailableCars[6].image;
    let makeCar7 = document.getElementById('namecar7');
    makeCar7.innerHTML = AvailableCars[6].make;
    let modalcar7 = document.getElementById('modalcar7');
    modalcar7.innerHTML = AvailableCars[6].model;
    let colorcar7 = document.getElementById('colorcar7');
    colorcar7.innerHTML = AvailableCars[6].color;
    let pricecar7 = document.getElementById('pricecar7');
    pricecar7.innerHTML = AvailableCars[6].price;
    let desccar7 = document.getElementById('desccar7');
    desccar7.innerHTML = AvailableCars[6].description;
    let categorycar7 = document.getElementById('categorycar7');
    categorycar7.innerHTML = AvailableCars[6].category;
    // car 8
    let imageCar8 = document.getElementById('imgCar8');
    imageCar8.src = AvailableCars[7].image;
    let makeCar8 = document.getElementById('namecar8');
    makeCar8.innerHTML = AvailableCars[7].make;
    let modalcar8 = document.getElementById('modalcar8');
    modalcar8.innerHTML = AvailableCars[7].model;
    let colorcar8 = document.getElementById('colorcar8');
    colorcar8.innerHTML = AvailableCars[7].color;
    let pricecar8 = document.getElementById('pricecar8');
    pricecar8.innerHTML = AvailableCars[7].price;
    let desccar8 = document.getElementById('desccar8');
    desccar8.innerHTML = AvailableCars[7].description;
    let categorycar8 = document.getElementById('categorycar8');
    categorycar8.innerHTML = AvailableCars[7].category;

    // car 9
    let imageCar9 = document.getElementById('imgCar9');
    imageCar9.src = AvailableCars[8].image;
    let makeCar9 = document.getElementById('namecar9');
    makeCar9.innerHTML = AvailableCars[8].make;
    let modalcar9 = document.getElementById('modalcar9');
    modalcar9.innerHTML = AvailableCars[8].model;
    let colorcar9 = document.getElementById('colorcar9');
    colorcar9.innerHTML = AvailableCars[8].color;
    let pricecar9 = document.getElementById('pricecar9');
    pricecar9.innerHTML = AvailableCars[8].price;
    let desccar9 = document.getElementById('desccar9');
    desccar9.innerHTML = AvailableCars[8].description;
    let categorycar9 = document.getElementById('categorycar9');
    categorycar9.innerHTML = AvailableCars[8].category;
    // car 10
    let imageCar10 = document.getElementById('imgCar10');
    imageCar10.src = AvailableCars[9].image;
    let makeCar10 = document.getElementById('namecar10');
    makeCar10.innerHTML = AvailableCars[9].make;
    let modalcar10 = document.getElementById('modalcar10');
    modalcar10.innerHTML = AvailableCars[9].model;
    let colorcar10 = document.getElementById('colorcar10');
    colorcar10.innerHTML = AvailableCars[9].color;
    let pricecar10 = document.getElementById('pricecar10');
    pricecar10.innerHTML = AvailableCars[9].price;
    let desccar10 = document.getElementById('desccar10');
    desccar10.innerHTML = AvailableCars[9].description;
    let categorycar10 = document.getElementById('categorycar10');
    categorycar10.innerHTML = AvailableCars[9].category;

}

function onBookCar(id) {
    console.log(id)
    let selectedBoookCar = {};
    selectedBoookCar =AvailableCars[id];
    console.log(selectedBoookCar)
    var BookedCarStorage = [];
    var getFromStorage = [];
    getFromStorage = JSON?.parse(localStorage.getItem("MyBookings"));
    if (getFromStorage?.length > 0 && getFromStorage?.length < 10) {
        getFromStorage.push(selectedBoookCar);
        localStorage.setItem("MyBookings", JSON.stringify(getFromStorage));
        alert("Your Car has been booked successfully!");
    } else if (getFromStorage === null) {
        BookedCarStorage.push(selectedBoookCar)
        localStorage.setItem("MyBookings", JSON.stringify(BookedCarStorage));
        alert("Your Car has been booked successfully!");
    }
}

var numOne = Math.floor(9 + Math.random() * 9);
var numtwo = Math.floor(9 + Math.random() * 9);
if (getCurrentURL().includes("contact.html")) {
    setTimeout(() => {
        document.getElementById("numberonly").hidden = true;
        document.getElementById("num1").innerHTML = numOne;
        document.getElementById("num2").innerHTML = numtwo;
    }, 500);
}

if (getCurrentURL().includes("booking.html")) {
    var getBookedCars = [];
    var newArraysCars=[]
    getBookedCars = JSON?.parse(localStorage.getItem("MyBookings"));
    if (getBookedCars != null) {
        AvailableCars.forEach(allData => {
            getBookedCars.forEach(element => {
                if(allData.id === element.id){
                    newArraysCars.push(allData);
                }
            });
        });
        setTimeout(() => {
            newArraysCars.forEach(element => {
                document.getElementById("tabeBodyMyBookings").innerHTML += `
                <tr>
                    <td><img src='${element.image}' alt="" class='carImg'></td>
                    <td style='vertical-align: inherit'>${element.make}</td>
                    <td style='vertical-align: inherit'>${element.model}</td>
                    <td style='vertical-align: inherit'>${element.color}</td>
                    <td style='vertical-align: inherit'>${element.price}</td>
                    <td style='vertical-align: inherit'>${element.description}</td>
                    <td style='vertical-align: inherit'>${element.category}</td>
                    <td style='vertical-align: inherit'><button class='btn btn-danger' onclick='onDeleteCar(${JSON.stringify(element)})'>Delete</button></td>
                </tr>
            `
            });
        }, 500);
    }
}

function onDeleteCar(SelectedCar) {
    if (confirm("Are you sure to delete this booking?") == true) {
        let selectedBoookCar = {};
        selectedBoookCar = SelectedCar;
        var getFromStorage = [];
        getFromStorage = JSON?.parse(localStorage.getItem("MyBookings"));
        if (getFromStorage != null) {
            var id = selectedBoookCar.id;
            console.log(id)
            for (var i = 0; i < getFromStorage.length; i++) {
                if (getFromStorage[i].id == id) {
                    getFromStorage.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("MyBookings", JSON.stringify(getFromStorage));
            window.location.reload();
        }
    }

}

function clearBookings() {
    localStorage.clear();
    window.location.reload();
}

function onSubmitOrder() {
    var getFromStorage = [];
    getFromStorage = JSON?.parse(localStorage.getItem("MyBookings"));
    if (getFromStorage != null) {
        alert("Thank you for your order");
        localStorage.clear();
        window.location.reload();
    } else {
        alert("Your order cannot be processed as have not reserved any cars")
    }
}

function changeValue(value) {
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(emailReg)) {
        document.getElementById("validEmail").innerHTML = "Congrats. This is valid Email address!";
        document.getElementById("InvalidvalidEmail").hidden = true;
        document.getElementById("validEmail").hidden = false;
    } else {
        document.getElementById("validEmail").hidden = true;
        document.getElementById("InvalidvalidEmail").hidden = false;
        document.getElementById("InvalidvalidEmail").innerHTML = "Please enter valid Email address!";
    }
}
function onSubmitFrom() {
    // Storing Field Values In Variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var answer = parseFloat(document.getElementById("answer").value);
    // Regular Expression For Email
    var num1 = parseFloat(document.getElementById("num1").innerHTML);
    var num2 = parseFloat(document.getElementById("num2").innerHTML);
    var TotalVal = num1 + num2;
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Conditions
    if (name != '' && email != '' && contact != '' && message != '') {
        if (email.match(emailReg)) {
            if (message.length <= 500) {
                if (answer === TotalVal) {
                    document.getElementById("success").innerHTML = `Dear <strong class='font-weight-bold'>${name}</strong>, Thank you for your inquiry. One of our team members will be in touch with you shortly.`;
                    document.getElementById("formData").hidden = true;;
                    return true;
                } else {
                    var numOne = Math.floor(9 + Math.random() * 9);
                    var numtwo = Math.floor(9 + Math.random() * 9);
                    setTimeout(() => {
                        document.getElementById("num1").innerHTML = numOne;
                        document.getElementById("num2").innerHTML = numtwo;
                    }, 500);
                    document.getElementById("ErrorMsg").innerHTML = "The user provides an incorrect answer to the maths problem";
                    return false;
                }
            } else {
                document.getElementById("ErrorMsg").innerHTML = "The Message must be Maximum 500 character long!";
                return false;
            }
        } else {
            document.getElementById("ErrorMsg").innerHTML = "Invalid Email Address!";
            return false;
        }
    } else {
        document.getElementById("ErrorMsg").innerHTML = "All fields are required.....!";
        return false;

    }
};

function onfocusFunction() {
    //alert("onfocusFunction");
    document.getElementById("numberonly").hidden = false;
}

function blurFunction() {
    document.getElementById("numberonly").hidden = true;
}

function getCurrentURL() {
    return window.location.href
}