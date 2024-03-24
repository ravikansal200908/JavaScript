function outerFunction() {
    const email = 'testing@gmail.com';

    function innerFunction() {
        console.log("Email is : ", email);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();