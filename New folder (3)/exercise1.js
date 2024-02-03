class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.data = [];
            Singleton.instance = this;
        }
        return this.data;
    }
    getData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => console.log(typeof response))
            .then((response) => response.groupBy())
            .catch((err) => {
                console.log(err);
            });
    }
}

const singleton = new Singleton();

Array.prototype.groupBy = function () {
    const newObj = {};
    this.forEach((posts) => {
        if (!newObj.hasOwnProperty(posts.userId)) {
            const newArray = [];
            newArray.push(posts);
            newObj[posts.userId] = newArray;
        } else {
            newObj[posts.userId].push(posts);
        }
    });
    return newObj;
};
