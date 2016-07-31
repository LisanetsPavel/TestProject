/**
 * Created by user on 27.07.16.
 */
function Validator() {
    function showError(container, errorMessage) {
        var msgElem = document.createElement('p');
        msgElem.className = "error";
        msgElem.innerHTML = errorMessage;
        container.appendChild(msgElem);
    }

    function resetError(container) {
        if (container.lastChild.className == "error") {
            container.removeChild(container.lastChild);
        }
    }

    this.validate = function (form) {
        var elems = form.elements;
        var valid = true;
        
        if (form.attributes.id.value === "formDeps") {
            resetError(elems.name.parentNode);
            if (!elems.name.value) {
                showError(elems.name.parentNode, ' Name not be empty');
                valid = false;
            }
        } else {
            resetError(elems.firstname.parentNode);
            if (!elems.firstname.value) {
                showError(elems.firstname.parentNode, 'Firstname not be empty');
                valid = false;
            }

            resetError(elems.lastname.parentNode);
            if (!elems.lastname.value) {

                showError(elems.lastname.parentNode, 'Lastname not be empty');
                valid = false;
            }

            resetError(elems.email.parentNode);
            if (!elems.email.value) {
                showError(elems.email.parentNode, 'Email not be empty');
                valid = false;
            } else if (!validateEmail(elems.email.value)) {
                showError(elems.email.parentNode, 'incorrect email');
                valid = false;
            }

            resetError(elems.birthday.parentNode);
            if (!elems.birthday.value) {
                showError(elems.birthday.parentNode, 'Birthday not be empty');
                valid = false;
            } else if (!validateDate(elems.birthday.value)) {
                showError(elems.birthday.parentNode, 'incorrect date');
                valid = false;
            }

            resetError(elems.salary.parentNode);
            if (!elems.salary.value) {
                showError(elems.salary.parentNode, 'Salary not be empty');
                valid = false;
            } else if (isNaN(elems.salary.value)) {
                showError(elems.salary.parentNode, 'Salary must be a number');
                valid = false;
            }
        }

        return valid;
    }

    function validateEmail(email) {
        var regex = /\S+@\S+\.\S+/;
        return regex.test(email);

    }

    function validateDate(date) {
        if (date == "" || date == null) {
            return false;
        }
        var m = date.match(/(\d{4})-(\d{2})-(\d{2})/);
        if (m === null || typeof m !== 'object' || m.length !== 4) {
            return false;
        }
        var valid = true;
        var thisYear = new Date().getFullYear();
        var minYear = 1000;
        if ((m[1].length < 4) || m[1] < minYear || m[1] > thisYear) {
            valid = false;
        }
        if ((m[2].length < 2) || m[2] < 1 || m[2] > 12) {
            valid = false;
        }
        if ((m[3].length < 2) || m[3] < 1 || m[3] > 31) {
            valid = false;
        }

        return valid;
    }
}