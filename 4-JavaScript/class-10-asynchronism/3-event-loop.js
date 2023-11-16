// Call Stack
console.log(1);

// Call Stack
for (let index = 0; index < 200000; index++) {
    console.log(index);
}

// Task
setTimeout(() => {
    console.log(2);
}, 2000);

// Microtask
queueMicrotask(() => {
    console.log(3);
});

// Microtask
Promise.resolve().then(() => {
    console.log(4);
});



