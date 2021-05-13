function setFocus()
{
document.getElementById("username").focus();
}

function dangki() {
    var input = document.getElementsByTagName('input');
    var username = input[0].value;
    var password = input[1].value;
    var repassword = input[2].value;
    var name = input[3].value;
    

    var birthdate
    var gender;
    var favorite = "";
    var image = input[10].value;
    if (input[4].checked) {
        gender = "Nam";
    } else {
        gender = "Nữ";
    }

    if (username == "" || password == "" || repassword == "" || name=="" || image=="") {
        alert("Làm ơn điền vào tất cả ô");
        return;
    }


    if (input[6].checked || input[7].checked || input[8].checked || input[9].checked) {

    } else {
        alert("Phải chọn sở thích");
        return;
    }
    for (var i = 6; i <= 9; i++) {
        if (input[i].checked) {
            favorite += input[i].value + " ";
        }
    }

    var choice = confirm("confirm your information\n" + username + "\n" + password + "\n" + repassword +
        "\n" + name + "\n" + gender +  "\n" + birthdate + "\n" + favorite + "\n" + image);
    if (choice == 1) {
        alert("Information sent");
    }
}

function resetForm() {
    document.getElementsByTagName('form')[0].reset();
}

