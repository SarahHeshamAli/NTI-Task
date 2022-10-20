var degree = prompt ("enter Your Degree")
if(degree == "" || degree == null){
var res = "enter a valid value"
console.log (res)
}
else if (degree>90 ) {
    var res = "A"
    console.log(res)
}
else if (degree>80 && degree<90 ) {
    var res = "B"
    console.log (res)
}

else if ( degree>70 && degree<80) {
    var res = "c"
    console.log (res)
}

else if (degree>60 && degree<70) {
    var res= "d"
    console.log (res)
}
else if (degree<50) {
    var res = "f"
    console.log (res)
}
