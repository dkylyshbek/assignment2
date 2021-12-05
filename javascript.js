let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    },
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
]
 
 
 
 
function cleanUpIndex() {
    indexElement = document.querySelectorAll('.contact');
    for (let i = 0; i < indexElement.length; i++) {
        indexElement[i].remove();
    }
};
 
function cleanUpPage2() {
    page2Element = document.querySelectorAll('.contactedit');
    for (let i = 0; i < page2Element.length; i++) {
        page2Element[i].remove();
    }
};
 
function cleanUpPage3() {
    page3Element = document.querySelectorAll('.contactinfo')
    for(let i = 0; i < page3Element.length; i++){
        page3Element[i].remove()
    }
}
 
let clickContact = document.querySelector('.nav-home')
clickContact.addEventListener('click', function (event) {
    event.preventDefault()
    let index = document.querySelectorAll('.contact')
    let page2 = document.querySelectorAll('.contactedit')
    let page3 = document.querySelectorAll('.contactinfo')
    if (index.length != 0) {
        cleanUpIndex()
    }   else if (page2.length != 0) {
        cleanUpPage2()
    }   else if (page3.length != 0) {
        cleanUpPage3()
    }
    renderIndex(contactList)
})
 
 
let clickCreateContact = document.querySelector('.nav')
clickCreateContact.addEventListener('click', function (event) {
    event.preventDefault()
    let index = document.querySelectorAll('.contact')
    let page2 = document.querySelectorAll('.contactedit')
    let page3 = document.querySelectorAll('.contactinfo')
    if (index.length != 0) {
        cleanUpIndex()
    }   else if (page2.length != 0) {
        cleanUpPage2()
    }   else if (page3.length != 0) {
        cleanUpPage3()
    }
    renderCreate()
})
 
 
function createSingleIndex(contact) {
    let main = document.querySelectorAll('.main')
    let cDiv = document.createElement('div')
    let cP = document.createElement('p')
    cP.appendChild(contact.name)
    cDiv.appendChild(cP)
    cDiv.classList.add('contact')
    main[0].appendChild(cDiv)
 
 
};
 
function renderIndex(contact) {
   
    let main = document.querySelectorAll('.main');
    for (let i = 0; i < contact.length; i++) {
        let cDiv = document.createElement('div');
        let cP = document.createElement('p');
        cP.append(contact[i].name)
        cDiv.appendChild(cP)
        cDiv.classList.add('contact')
        main[0].appendChild(cDiv)
 
        cDiv.addEventListener('click', function (event){
            event.preventDefault()
            cleanUpIndex()
            renderView(contact)
        })
 
    }
};
 
 
function renderCreate() {
    let main = document.querySelectorAll('.main')[0]
    let contactedit = document.createElement('div')
    contactedit.classList.add('contactedit')
    let contactimg = document.createElement('div')
    contactimg.classList.add('contactimg')
    let form = document.createElement('div')
    form.classList.add('form')
    let realForm = document.createElement('form')
    let inputcontainer1 = document.createElement('div')
    inputcontainer1.classList.add('inputcontainer')
    let inputcontainer2 = document.createElement('div')
    inputcontainer2.classList.add('inputcontainer')
    let inputcontainer3 = document.createElement('div')
    inputcontainer3.classList.add('inputcontainer')
    let inputcontainer4 = document.createElement('div')
    inputcontainer4.classList.add('inputcontainer')
    let buttons = document.createElement('div')
    buttons.classList.add('buttons')
 
    let buttonsave = document.createElement('button')
    buttonsave.classList.add('save')
    buttonsave.classList.add('button')
    buttonsave.setAttribute('type', 'submit')
    buttonsave.setAttribute('id', 'savecontact')
    buttonsave.setAttribute('name', 'savecontact')
    let saveText = document.createTextNode('Save Contact')
    buttonsave.appendChild(saveText)
 
    let buttoncancel = document.createElement('button')
    buttoncancel.classList.add('cancel')
    buttoncancel.classList.add('button')
    buttoncancel.setAttribute('type', 'reset')
    buttoncancel.setAttribute('id', 'cancel')
    buttoncancel.setAttribute('name', 'cancel')
    let cancelText = document.createTextNode('Cancel')
    buttoncancel.appendChild(cancelText)
 
 
    let imagePicture = document.createElement('img')
    imagePicture.src = './img/profile.jpg';
    imagePicture.classList.add('profilepic');
    imagePicture.setAttribute('alt', 'Profile Picture')
 
    let nameInput = document.createElement('input')
    nameInput.classList.add('contactname')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'contactname')
    nameInput.setAttribute('placeholder', 'Contact Name')
 
    let button1 = document.createElement('button')
    button1.classList.add('extrafield')
    button1.setAttribute('id', 'extranamefield')
    button1.setAttribute('name', 'extranamefield')
    let button1Text = document.createTextNode('+')
    button1.appendChild(button1Text)
 
    let phoneInput = document.createElement('input')
    phoneInput.classList.add('contactphone')
    phoneInput.setAttribute('type', 'tel')
    phoneInput.setAttribute('id', 'contactphone')
    phoneInput.setAttribute('placeholder', 'Contact Phone')
 
    let button2 = document.createElement('button')
    button2.classList.add('extrafield')
    button2.setAttribute('id', 'extraphonefield')
    button2.setAttribute('name', 'extraphonefield')
    let button2Text = document.createTextNode('+')
    button2.appendChild(button2Text)
   
    let addressInput = document.createElement('input')
    addressInput.classList.add('contactaddress')
    addressInput.setAttribute('type', 'text')
    addressInput.setAttribute('id', 'contactaddress')
    addressInput.setAttribute('placeholder', 'Contact Address')
 
    let button3 = document.createElement('button')
    button3.classList.add('extrafield')
    button3.setAttribute('id', 'extraaddressfield')
    button3.setAttribute('name', 'extraaddressfield')
    let button3Text = document.createTextNode('+')
    button3.appendChild(button3Text)
   
    let emailInput = document.createElement('input')
    emailInput.classList.add('contactemail')
    emailInput.setAttribute('type', 'text')
    emailInput.setAttribute('id', 'contactemail')
    emailInput.setAttribute('placeholder', 'Contact Email')
 
    let button4 = document.createElement('button')
    button4.classList.add('extrafield')
    button4.setAttribute('id', 'extraemailfield')
    button4.setAttribute('name', 'extraemailfield')
    let button4Text = document.createTextNode('+')
    button4.appendChild(button4Text)
 
 
 
   
   
    inputcontainer1.appendChild(nameInput)
    inputcontainer2.appendChild(phoneInput)
    inputcontainer3.appendChild(addressInput)
    inputcontainer4.appendChild(emailInput)
    inputcontainer1.appendChild(button1)
    inputcontainer2.appendChild(button2)
    inputcontainer3.appendChild(button3)
    inputcontainer4.appendChild(button4)
    buttons.appendChild(buttonsave)
    buttons.appendChild(buttoncancel)
    realForm.appendChild(inputcontainer1)
    realForm.appendChild(inputcontainer2)
    realForm.appendChild(inputcontainer3)
    realForm.appendChild(inputcontainer4)
    realForm.appendChild(buttons)
    form.appendChild(realForm)
    contactimg.appendChild(imagePicture)
    contactedit.appendChild(contactimg)
    contactedit.appendChild(form)
    main.appendChild(contactedit)
   
 
    buttoncancel.addEventListener('click', function (event) {
        event.preventDefault();
        cleanUpPage2();
        renderIndex(contactList);
    })
};
 
 
 
 
function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    let info = document.createElement('div');
    let name = document.createElement('div');
    let img = document.createElement('img');
    let email = document.createElement('div');
    let phone = document.createElement('div');
    let address = document.createElement('div');
    let buttons = document.createElement('div');
    let editbutton = document.createElement('button')
    let buttonClose = document.createElement('button')
 
    img.src = './img/profile.jpg';
    img.classList.add('profilepic');
    img.alt = 'Profile Picture';
    name.append(contact.name);
    name.classList.add('contactname');
    info.classList.add('contactinfo');
    name.appendChild(img);
    info.appendChild(name);
    main.appendChild(info);
    email.append('email: ', contact.email);
    email.classList.add('contactemail');
    info.appendChild(email);
    phone.append('cell: ', contact.phone);
    phone.classList.add('contactphone');
    info.appendChild(phone);
    address.append('address: ', contact.address);
    address.classList.add('contactaddress');
    info.appendChild(address);
 
    editbutton.classList.add('button');
    editbutton.classList.add('edit');
    editbutton.value = 'Edit';
    editbutton.append('Edit');
    buttonClose.classList.add('button');
    buttonClose.classList.add('close');
    buttonClose.value = 'Close';
    buttonClose.append('Close');
    buttons.classList.add('buttons');
    buttons.appendChild(editbutton);
    buttons.appendChild(buttonClose);
    info.appendChild(buttons);
 
    buttonClose.addEventListener("click", function (event) {
        event.preventDefault();
        cleanUpPage3();
        renderIndex(contactList);
    });
 
}

