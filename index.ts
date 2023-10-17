interface user {
    id: number
    type: string
    name: string
}

let user1:user = {
    id:1,
    type: "user",
    name: "Fernanda"
}

let user2:user = {
    id: 2,
    type: "user",
    name: "Roberto"
}

function changRole(user:user, type:string){
    user.type = type
    return user
}

let newADM = changRole(user1, "admin")