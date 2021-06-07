function checkUrl(inputText) {
    console.log("::: Running checkUrl :::", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkUrl }
