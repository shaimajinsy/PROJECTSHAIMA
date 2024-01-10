


function validateForm(){
    var text = document.querySelector('textarea').value;
    document.getElementById("validationtxt").innerHTML = "";
    if (text.trim() === ''){
      document.getElementById("validationtxt").innerHTML = "<b>Missing the content !!!,<br> Please enter the news article before proceed.</b>";
    
      //  alert("Please enter the news article.");
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('fileInput').addEventListener('change', function() {
var file = this.files[0];
var reader = new FileReader();
reader.onload = function(e) {
var contents = e.target.result;
document.getElementById('fileContent').value = contents;
};
reader.readAsText(file);
});
});

document.addEventListener('DOMContentLoaded', function() {
var fileInput = document.getElementById('fileInput');
var filenameText = document.getElementById('filename');

fileInput.addEventListener('change', function() {
if (fileInput.files.length > 0) {
filenameText.style.color = 'green';
filenameText.textContent = fileInput.files[0].name;
} else {
filenameText.style.color = 'red';
filenameText.textContent = 'No file selected';
}
});
});function clearArea(){
    document.getElementById("text").value = "";
}


function validateForm(){
    var text = document.querySelector('textarea').value;
    if (text.trim() === ''){
        alert("Please enter the news article.");
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('fileInput').addEventListener('change', function() {
var file = this.files[0];
var reader = new FileReader();
reader.onload = function(e) {
var contents = e.target.result;
document.getElementById('fileContent').value = contents;
};
reader.readAsText(file);
});
});

document.addEventListener('DOMContentLoaded', function() {
var fileInput = document.getElementById('fileInput');
var filenameText = document.getElementById('filename');

fileInput.addEventListener('change', function() {
if (fileInput.files.length > 0) {
filenameText.style.color = 'green';
filenameText.textContent = fileInput.files[0].name;
} else {
filenameText.style.color = 'red';
filenameText.textContent = 'No file selected';
}
});
});