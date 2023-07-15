function SendMeesge() {
    // Storing Field Values In Variables
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var answer = parseFloat(document.getElementById("answer").value);
    // Regular Expression For Email
    var number1 = parseFloat(document.getElementById("numberOne").innerHTML);
    var number2 = parseFloat(document.getElementById("numberTwo").innerHTML);
    var total = number1 + number2;

    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Conditions
    if (name != '' && email != '' && contact != '' && message != '') {
        if (email.match(emailReg)) {
            if (message.length <= 500) {
                if (answer === total) {
                    document.getElementById("success").innerHTML = `Dear <strong class='font-weight-bold'>${name}</strong>, Thank you for your inquiry. One of our team members will be in touch with you shortly.`;
                    document.getElementById("formData").hidden = true;;
                    return true;
                } else {
                    var numOne = Math.floor(9 + Math.random() * 9);
                    var numtwo = Math.floor(9 + Math.random() * 9);
                    setTimeout(() => {
                        document.getElementById("numberOne").innerHTML = numOne;
                        document.getElementById("numberTwo").innerHTML = numtwo;
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
function focusFunction() {
    document.getElementById("numberonly").style.display = "block"
}

function blurFunction() {
    document.getElementById("numberonly").style.display = "none"
}

function GetMyCurrentURL() {
    return window.location.href
}
const MyAvaialbeCars = [{
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
if (GetMyCurrentURL().includes("index.html")) {
    MyAvaialbeCars.forEach(element => {
        document.getElementById("mybookingCars").innerHTML += `
        <div class='row borderRow'>
        <div class='col-lg-4 col-md-4 col-sm-4'>
          <img src='${element.image}' alt='' class='bookingImg'>
        </div>
        <div class='col-lg-8 col-md-8 col-sm-8'>
          <h4 class='text-light'>Make: <span class='display-3 text-primary'>${element.make}</span></h4>
          <h4 class='text-light'>Model: <span class='display-3 text-primary'>${element.model}</span></h4>
          <h4 class='text-light'>Color: <span class='display-3 text-primary'>${element.color}</span></h4>
          <h4 class='text-light'>Price: <span class='display-3 text-primary'>${element.price}</span></h4>
          <h4 class='text-light'>Description: <span class='display-3 text-primary'>${element.description}</span></h4>
          <h4 class='text-light'>Category: <span class='display-3 text-primary'>${element.category}</span></h4>
          <button class='btn btn-warning btn-block' onclick='bookMyCar(${JSON.stringify(element)})'>Book me</button>
        </div>
      </div>
        `
    });
}

function bookMyCar(bookedcar) {
    let OnbookedCar = {};
    OnbookedCar = bookedcar
    var storeBookedCar = [];
    var myBookedCarFromStorage = [];
    myBookedCarFromStorage = JSON?.parse(localStorage.getItem("MyBookedCars"));
    if (myBookedCarFromStorage?.length > 0 && myBookedCarFromStorage?.length < 10) {
        myBookedCarFromStorage.push(OnbookedCar);
        localStorage.setItem("MyBookedCars", JSON.stringify(myBookedCarFromStorage));
        alert("Your Car has been booked successfully!");
    } else if (myBookedCarFromStorage === null) {
        storeBookedCar.push(OnbookedCar)
        localStorage.setItem("MyBookedCars", JSON.stringify(storeBookedCar));
        alert("Your Car has been booked successfully!");
    }
}

var numOne = Math.floor(1 + Math.random() * 9);
var numtwo = Math.floor(1 + Math.random() * 9);
if (GetMyCurrentURL().includes("contact.html")) {
    setTimeout(() => {
        document.getElementById("numberOne").innerHTML = numOne;
        document.getElementById("numberTwo").innerHTML = numtwo;
    }, 500);
}

if (GetMyCurrentURL().includes("booking.html")) {
    var myBookedCarFromStorage = [];
    myBookedCarFromStorage = JSON?.parse(localStorage.getItem("MyBookedCars"));
    if (myBookedCarFromStorage != null) {
        myBookedCarFromStorage.forEach(element => {
            document.getElementById("BookedCars").innerHTML +=  `
            <div class='row borderRow'>
            <div class='col-lg-4 col-md-4 col-sm-4'>
              <img src='${element.image}' alt='' class='bookingImg'>
            </div>
            <div class='col-lg-8 col-md-8 col-sm-8'>
              <h4 class='text-light'>Make: <span class='display-3 text-primary'>${element.make}</span></h4>
              <h4 class='text-light'>Model: <span class='display-3 text-primary'>${element.model}</span></h4>
              <h4 class='text-light'>Color: <span class='display-3 text-primary'>${element.color}</span></h4>
              <h4 class='text-light'>Price: <span class='display-3 text-primary'>${element.price}</span></h4>
              <h4 class='text-light'>Description: <span class='display-3 text-primary'>${element.description}</span></h4>
              <h4 class='text-light'>Category: <span class='display-3 text-primary'>${element.category}</span></h4>
              <button class='btn btn-danger btn-block' onclick='onDeleteCar(${JSON.stringify(element)})'>Delete</button>
            </div>
          </div>
            `
        });
    }else{
        document.getElementById("nothing").style.display="block";
    }
}

function onDeleteCar(SelectedCar) {
    if (confirm("Are you sure to delete this booking?") == true) {
        let OnbookedCar = {};
        OnbookedCar = SelectedCar;
        var myBookedCarFromStorage = [];
        myBookedCarFromStorage = JSON?.parse(localStorage.getItem("MyBookedCars"));
        if (myBookedCarFromStorage != null) {
            var id = OnbookedCar.id;
            console.log(id)
            for (var i = 0; i < myBookedCarFromStorage.length; i++) {
                if (myBookedCarFromStorage[i].id == id) {
                    myBookedCarFromStorage.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("MyBookedCars", JSON.stringify(myBookedCarFromStorage));
            window.location.reload();
        }
    }

}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}

function confirmBookings() {
    var myBookedCarFromStorage = [];
    myBookedCarFromStorage = JSON?.parse(localStorage.getItem("MyBookedCars"));
    if (myBookedCarFromStorage != null) {
        alert("Thank you for your order");
        localStorage.clear();
        window.location.reload();
    } else {
        alert("Your order cannot be processed as have not reserved any cars")
    }
}