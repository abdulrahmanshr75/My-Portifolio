const form = document.getElementById('myForm');
const storeName = form.elements.name;
const storeEmail = form.elements.email;
const storeText = form.elements.text;

function store() {
  const formData = {

    name: storeName.value,
    email: storeEmail.value,
    text: storeText.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

storeName.onchange = store;
storeEmail.onchange = store;
storeText.onchange = store;

const storeData = JSON.parse(localStorage.getItem('formData'));

storeName.value = storeData.name;
storeEmail.value = storeData.email;
storeText.value = storeData.message;