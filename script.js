function cleanUpIndex() {
    elements = document.querySelectorAll('.contact');

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    }
};

cleanUpIndex() {

function createSingleIndex(contact)
    let main = document.querySelectorAll('.main')
    let cA = document.createElement('a')
    let cDiv = document.createElement('div')
    let cP = document.createElement('p')

    cA.appendChild(cDiv);
    cA.href = "page3.html"
    cP.appendChild(contact.name)
    cDiv.appendChild(cP)
    cDiv.classList.add("contact")

    main[0].appendChild(cA)
};

cleanUpIndex()

let contactList = [
    {
      name: "James Harden",
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
];

function renderIndex(contact) {
    let main = document.querySelectorAll('.main')
    for (let i = 0; i < contact.length; i++) {
        let cA = document.createElement('a')
        let cDiv = document.createElement('div')
        let cP = document.createElement('p')

        cP.append(contact[i].name)
        cDiv.appendChild(cP)
        cDiv.classList.add('contact')
        cA.appendChild(cDiv)
        cA.href = "page3.html"
        main[0].appendChild(cA)
    }
};

renderIndex()

function cleanUpView() {
    let contactinfo = document.querySelectorAll('.contactinfo');
    contactinfo[0].remove();    
};

function renderView(contact) {
    let main = document.querySelectorAll('.main')[0];
    let divInfo = document.createElement('div');
    let divName = document.createElement('div');
    let createImg = document.createElement('img');
    let divEmail = document.createElement('div');
    let divPhone = document.createElement('div');
    let divAddress = document.createElement('div');
    let divButtons = document.createElement('div');
    let buttonEdit = document.createElement('button');
    let buttonClose = document.createElement('button');

    createImg.src = '.img/profile.jpg';
    createImg.classList.add('profilepic');
    createImg.alt = 'Profile Picture';
    divName.append(contact.name);
    divName.classList.add('cname');
    divInfo.classList.add('cinfo');
    divName.appendChild(createImg);
    divInfo.appendChild(divName);
    main.appendChild(divInfo);
    divEmail.append('cemail: ', contact.name);
    divEmail.classList.add('email');
    divInfo.appendChild(divPhone);
    divAddress.append('address: ', contact.address);
    divAddress.classList.add('caddress');
    divInfo.appendChild(divAddress);

    buttonEdit.classList.add('button');
    buttonEdit.classList.add('close');
    buttonEdit.value = 'Close';
    buttonClose.append('Close');
    divButtons.classList.add('cbuttons');
    divButtons.appendChild(buttonEdit);
    divButtons.appendChild(buttonClose);
    divInfo.appendChild(divButtons)



};




