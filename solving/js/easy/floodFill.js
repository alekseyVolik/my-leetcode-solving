/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, replace = null) {
    let hight = image.length;
    let weight = image[0].length;
    if (sr < 0 || sr >= hight || sc < 0 || sc >= weight) return;
    replace ??= image[sr][sc];
    if (image[sr][sc] == color) return image;
    if (image[sr][sc] == replace) { image[sr][sc] = color } else { return };
    floodFill(image, sr - 1, sc, color, replace);
    floodFill(image, sr + 1, sc, color, replace);
    floodFill(image, sr, sc - 1, color, replace);
    floodFill(image, sr, sc + 1, color, replace);
    return image;
};