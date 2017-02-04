// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

if (localStorage.getItem("username") !== null) {
  //  JSON.parse( localStorage.getItem('')
}

for(var i in localStorage)
{
    $('#stream').prepend(localStorage[i]);
    // console.log(localStorage[i]);
}

// Delete local storage
// for(var i in localStorage) {
//     localStorage.removeItem(i);
// }
