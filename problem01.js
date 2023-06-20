const previousPermutation = (s) => {
    let arr = s.split('');
    let i = arr.length - 1;

    while (i > 0 && arr[i - 1] <= arr[i]) {
        i--;
    }
    if (i <= 0) {
        return 'no answer';
    }

    let j = arr.length - 1;

    while (arr[j] >= arr[i - 1]) {
        j--;
    }

    let temp = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = temp;

    j = arr.length - 1;

    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr.join('');
}

module.exports = previousPermutation;
