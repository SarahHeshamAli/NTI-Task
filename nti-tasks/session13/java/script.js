users = []
function numberOfusers() {
    let nums = prompt("enter number of users")
    console.log(nums)
    for(i=0 ; i<nums ; i++) {
        addUser()
    }
}
numberOfusers()

function addUser() {
    userInfo = {
        Name : prompt("enter user name") ,
        balance : prompt("enter balance") ,
        id : prompt("enter id")
    }
    // debugger
    users.push(userInfo)
    console.log(users)
}