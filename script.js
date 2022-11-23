let arr = ['shaxzod', 'valentina', 'aziz', 'odilbek', 'emil', 'saidbek']
let i = 0
let name = ''

while (arr[i] !== 'abbos') {


    i++     
    if (arr[i] === 'abbos') {
        name = arr[i]
        console.log(name);
    } else if (arr[i] !=='abbos') {
        console.log('кто это');

    }
    break
}

// do {
//     i++ 
        
//     if (arr[i] === 'abbos') {
//         name = arr[i]
//         console.log(name);
//     } else if (arr[i] !=='abbos') {
//         console.log('кто это');

//     }
  
// } while(arr[i] !== 'abbos')
