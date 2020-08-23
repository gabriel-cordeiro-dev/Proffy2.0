//search button
document.querySelector('#add-time')
.addEventListener('click', cloneField)

//when click the button

//execute action
function cloneField() {
    //duplicete fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //clear fields
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function (field) {
        field.value = ""
    })

    //insert into page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}