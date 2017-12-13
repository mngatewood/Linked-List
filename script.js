var websiteTitleInput = document.querySelector('#website');
var websiteURLInput = document.querySelector('#url');
var submitButton = document.querySelector('#submit');
var clearButton = document.querySelector('#clear-read');
var bookmarks = document.querySelector('#bookmarks');
var newBox = document.querySelector('article:not(.added)')
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarkCount = document.querySelector('#bookmark-count');
var numRead = document.querySelector('#num-read');
var numUnread = document.querySelector('#num-unread');
websiteTitleInput.focus();
submitButton.disabled = true;
clearButton.disabled = true;

websiteTitleInput.addEventListener('keyup', function () {
  disableSubmit();
})

websiteURLInput.addEventListener('keyup', function () {
  disableSubmit();
})

submitButton.addEventListener('click', function () {
  var form = document.querySelector('#form');
  if (form.checkValidity()) {
    makeNewBox();
    getWebsiteTitle();
    getWebsiteURL();
    makeNewRead();
    makeNewDelete();
    resetPage();
    countBookmarks();
    disableSubmit()
  } else {
    alert('Please enter a title and valid URL!');
  }
})

clearButton.addEventListener('click', function () {
  $('article.read1').remove();
  countBookmarks();
})

$(bookmarks).on('click', '.read-button', function () {
  this.parentElement.classList.toggle('read1');
  this.classList.toggle('read2');
  countBookmarks();
})

$(bookmarks).on('click', '.delete-button', function () {
  $(this).parent('article').remove();
  countBookmarks()
})

function disableSubmit() {
  if (websiteTitleInput.value === '' || websiteURLInput.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function makeNewBox() {
  var createNewBox = document.createElement('article');
  bookmarks.appendChild(createNewBox);
  newBox = document.querySelector('article:not(.added)');
}

function getWebsiteTitle() {
  var websiteTitle = websiteTitleInput.value;
  var createH2Element = document.createElement('h2');
  newBox.appendChild(createH2Element);
  var newBoxh2 = document.querySelector('article h2:not(.added)');
  newBoxh2.innerText = websiteTitleInput.value;
  var createHRElement = document.createElement('hr');
  newBox.appendChild(createHRElement);
  newBoxh2.classList.add('added');
}

function getWebsiteURL() {
  var websiteURL = websiteURLInput.value;
  var createPElement = document.createElement('p');
  newBox.appendChild(createPElement);
  var newBoxP = document.querySelector('article p:not(.added)');
  newBoxP.innerHTML = '<a href= "' + websiteURLInput.value + '">' + websiteURLInput.value + '</a>';
  var createHRElement = document.createElement('hr');
  newBox.appendChild(createHRElement);
  newBoxP.classList.add('added', 'website-url');
}

function makeNewRead() {
  var createReadElement = document.createElement('button');
  newBox.appendChild(createReadElement);
  var newBoxRead = document.querySelector('button:not(.added)');
  newBoxRead.innerText = 'Read';
  newBoxRead.classList.add('added', 'read-button', 'bookmark-buttons');
}

function makeNewDelete() {
  var createDeleteElement = document.createElement('button');
  newBox.appendChild(createDeleteElement);
  var newBoxDelete = document.querySelector('button:not(.added)');
  newBoxDelete.innerText = "Delete";
  newBoxDelete.classList.add('added', 'delete-button', 'bookmark-buttons');
}

function resetPage() {
  newBox.classList.add('added', 'bookmark');
  websiteTitleInput.value = '';
  websiteURLInput.value = '';
  websiteTitleInput.focus();
}

function countBookmarks() {
  var numArticles = document.querySelectorAll('article');
  var numReadArticles = document.querySelectorAll('.read1');
  bookmarkCount.innerText = numArticles.length;
  numRead.innerText = numReadArticles.length;
  numUnread.innerText = numArticles.length - numReadArticles.length;
  if (numReadArticles.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
}
