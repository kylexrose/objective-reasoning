// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(obj){
    return obj.userRole === "ADMIN"
}

function getEmail(obj){
    return obj.firstName.toLowerCase() + '.' +
    obj.lastName.toLowerCase() + "@codeimmersives.com";
}

function getPlaylistLength(obj){
    return obj.songs.length;
}

function getHardestHomework(arr){
    if (arr.length === 0){
        return "";
    }
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i].averageScore < lowest.averageScore){
            lowest = arr[i]
        }
    }
    return lowest.name;
}

function createPhonebook(names, phones){
    let obj = {};
    for (let i = 0; i < names.length; i++){
        obj[names[i]] = phones[i];
    }
    return obj;
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};