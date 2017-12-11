var websiteTitleInput = document.querySelector('#website');
var websiteURLInput = document.querySelector('#url');
var submitButton = document.querySelector('#submit');
var bookmarks = document.querySelector('#bookmarks');
var newBox = document.querySelector('article:not(.added)')
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
websiteTitleInput.focus();
submitButton.disabled = 'true';

websiteTitleInput.addEventListener('keyup', function(event) {
  event.preventDefault;
  disableSubmit();
})

websiteURLInput.addEventListener('keyup', function(event) {
  event.preventDefault;
  disableSubmit();
})

submitButton.addEventListener('click', function(event) {
  event.preventDefault;
  var form = document.querySelector('#form');
  if(form.checkValidity()) {
    makeNewBox();
    getWebsiteTitle();
    getWebsiteURL();
    makeNewRead();
    makeNewDelete();
    resetPage();
  } else {
    alert('Please enter a title and valid URL!');
  }
})

$(bookmarks).on('click', '.read-button', function() {
  event.preventDefault;
  console.log('read clicked');
  this.parentElement.classList.toggle('read1');
  this.classList.toggle('read2');
})

$(bookmarks).on('click', '.delete-button', function() {
  event.preventDefault;
  console.log('read clicked');
  $(this).parent('article').remove();
})

function disableSubmit(){
  if (websiteTitleInput.value === '' || websiteURLInput.value === '') {
    console.log('disabled');
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
    console.log('enabled');
  } 
}

function makeNewBox() {
  var createNewBox = document.createElement('article')
  bookmarks.appendChild(createNewBox);
  newBox = document.querySelector('article:not(.added)')
}

function getWebsiteTitle() {
  var websiteTitle = websiteTitleInput.value
  var createH2Element = document.createElement('h2');
  newBox.appendChild(createH2Element);
  var newBoxh2 = document.querySelector('h2:not(.added)');
  newBoxh2.innerText = websiteTitleInput.value;
  var createHRElement = document.createElement('hr');
  newBox.appendChild(createHRElement);
  newBoxh2.classList.add('added');
}

function getWebsiteURL() {
  var websiteURL = websiteURLInput.value
  var createPElement = document.createElement('p');
  newBox.appendChild(createPElement);
  var newBoxP = document.querySelector('p:not(.added)');
  newBoxP.innerHTML = '<a href= "' + websiteURLInput.value + '">' + websiteURLInput.value + '</a>';
  var createHRElement = document.createElement('hr');
  newBox.appendChild(createHRElement);
  newBoxP.classList.add('added', 'website-url');
}

function makeNewRead() {
  var createDiv1Element = document.createElement('button');
  newBox.appendChild(createDiv1Element);
  var newBoxDiv1 = document.querySelector('button:not(.added)');
  newBoxDiv1.innerText = 'Read';
  newBoxDiv1.classList.add('added', 'read-button', 'bookmark-buttons');
}

function makeNewDelete() {
  var createDiv2Element = document.createElement('button');
  newBox.appendChild(createDiv2Element);
  var newBoxDiv2 = document.querySelector('button:not(.added)');
  newBoxDiv2.innerText = "Delete";
  newBoxDiv2.classList.add('added', 'delete-button', 'bookmark-buttons');
}

function resetPage() {
  newBox.classList.add('added', 'bookmark');
  websiteTitleInput.value = '';
  websiteURLInput.value = '';
  websiteTitleInput.focus();
}
