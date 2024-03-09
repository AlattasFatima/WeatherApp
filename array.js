const cities = [
    {id: 1, name:'Mecca'},
    {id: 2, name: 'Riyadh'},
    {id: 3, name: 'Dammam'}
] 

cities.forEach(function(elem){
    //console.log(elem.name)
    process.stdout.write(elem.name + "  ")
})

console.log(cities.length)