const imagemin = require("imagemin");
const webp = require("imagemin-webp");

let options = {
    destination: "destination", plugins: [
        webp({
            quality: 25
        })
    ]
};

async function jpgImagesConverter() {
    return await imagemin(["sources/*.jpg"], options);
}

function pngImagesConverter() {
    imagemin(["sources/*.png"], options).then(() => {
        jpgImagesConverter().then(() => {
            console.log("Images converted!");
        });
    }).catch(function (e) {
        console.error(e);
    });
}


pngImagesConverter();
