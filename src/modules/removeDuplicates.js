export let removeDuplicates = function(array) {
    return array.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
};