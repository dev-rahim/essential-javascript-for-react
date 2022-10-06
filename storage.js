// 1
localStorage.setItem('id', '1454')

// 2
const getId = localStorage.getItem('id');
console.log(getId);

// 3
const addToLocalStorage = () => {
    const id = document.getElementById('key-input');
    const value = document.getElementById('value-input');

    if (id.value && value.value) {
        localStorage.setItem(JSON.stringify(id.value), JSON.stringify(value.value))
    }
    id.value = '';
    value.value = '';
}