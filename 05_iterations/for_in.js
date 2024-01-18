const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "Ruby",
    swift: "swift by apple"
}
for (const key in myobj) {
    // console.log(myobj[key]);
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}