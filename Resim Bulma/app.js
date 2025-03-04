const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageList = document.querySelector(".imageList");
const icon = document.querySelector(".searchButton2");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

function search(e) {
    e.preventDefault(); // Formun submit işlemini engelle

    const value = searchInput.value.trim();
    removeNoResultsMessage(); // Arama yapıldığında, no results mesajını kaldır
    removeEmptyBoxMessage(); // Eğer önceki "empty" mesajı varsa, onu da kaldır

    if (!value) {
        emptyBox(); // Eğer arama kutusu boşsa, "Arama kutusuna bir şey yazın" mesajını ekle
        return; // Diğer işlemler yapılmasın
    }

    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID Uc_UVl0XQFRMTAchXcfIGWbNbFvxat6KZJoREnk7YKs"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.results.length === 0) {
                noResultsMessage(); // Eğer sonuç yoksa, "bulunamadı" mesajını ekle
            } else {
                data.results.forEach((image) => {
                    addImageToUI(image.urls.small);
                });
            }
        })
        .catch((err) => console.log(err));
}

icon.addEventListener("click", function (e) {
    search(e);
});

function clear() {
    searchInput.value = ""; // Arama kutusunu temizle
    imageList.innerHTML = ""; // Resimlerin olduğu alanı temizle

    // "Boş arama" mesajını temizle
    removeNoResultsMessage();
    removeEmptyBoxMessage();
}


function addImageToUI(url) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = '400';
    img.width = '400';

    div.appendChild(img);
    imageList.appendChild(div);
}

function noResultsMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'no-results-message';
    messageDiv.textContent = 'Bu terime uygun resim bulunamadı';
    imageList.appendChild(messageDiv);
}

function removeNoResultsMessage() {
    const existingMessage = document.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}

function emptyBox() {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty-box';
    emptyDiv.textContent = 'Arama Kutusuna bir şey yazın.';
    imageList.appendChild(emptyDiv);
}

function removeEmptyBoxMessage() {
    const emptyMessage = document.querySelector('.empty-box');
    if (emptyMessage) {
        emptyMessage.remove();
    }
}