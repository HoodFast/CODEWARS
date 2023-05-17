function findOutlier(int) {
    let temp = [0, 0]
    for (let i = 0; i < 3; i++) {

        if (int[i] % 2 === 0) {
            temp[0] += 1
        } else {
            temp[1] += 1
        }
    }
    if (temp[0] <= 1) {
        return int.filter(i => i % 2 === 0)[0]
    } else if (temp[1] <= 1) {
        let a = int.filter(i => i % 2 === 1)[0]
        if (a) {
            return a
        } else {
            return int.filter(i => i % 2 === -1)[0]
        }
    }
}