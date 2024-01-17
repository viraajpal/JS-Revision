// const tinderUser = new Object() // object declaration with singleton object

const tinderUser = {} // object declaration non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Viraaj"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "viraaj@email.com",
    fullName: {
        userfullName: {
            firstName: "Abhay",
            lastName: "Pal"
        }
    }
}
// console.log(regularUser.fullName.userfullName);

//combining of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // never prefer to uses like this
// const obj3 = Object.assign({}, obj1, obj2) // mostly try to use this type of object cancatination

const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
]

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'))

const course = {
    courseName : "JavaScript",
    price : 9999,
    courseInstructor: "Viraaj"
}

// console.log(course.price);

const {courseInstructor} = course
console.log(courseInstructor);