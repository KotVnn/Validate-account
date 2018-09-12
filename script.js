let userName = [
    "123abc_",
    "_abc123",
    "______",
    "123456",
    "abcdefg"
];

let userBadName = [
    ".@",
    "12345",
    "1234_",
    "abcde "
]

let regex = /^[_a-z0-9]{6,}$/;

for (let user of userName){
    console.log(regex.test(user) ? user + " good" : user + " bad");
}

for (let user of userBadName){
    console.log(regex.test(user) ? "-" + user + " bad" : "-" + user + " good");
}