const obj = {};
// obj.outerObj = {};
obj.configInfo = {};

obj.outerObj = {
    property1: "obj.property1",
    property2: "obj.property2",
    property3: "obj.property3",
}

obj.config = {
    config1: "obj.config1",
    config2: "obj.config2",
    config3: "obj.config3"
};

const outerConfig = {
    config1: "outerConfig1",
    config2: "outerConfig2",
    config3: "outerConfig3"
};

obj._function = function () {
    return new Promise(function (resolve, reject) {

        let config = {
            config1: "innerConfig1",
            config2: "innerConfig2",
            config3: "innerConfig3"
        };

        this.configInfo = config;

        let innerObj = this.outerObj;

        // console.log(config);
        // console.log("----------------------------------");

        console.log(this.configInfo);
        console.log("----------------------------------");

        console.log(innerObj);
        console.log("----------------------------------");

        resolve();

    });
    // }.bind(this));
}

obj._function();