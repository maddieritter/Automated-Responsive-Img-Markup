// JavaScript Document

const IMAGES = document.querySelectorAll("img");

const SIZES = {
    showcase: "100vw",
    trends: "(max-width: 799px) 100vw, 367px",
    article: "(max-width: 799px) 100vw, 575px",
    featureimg: "(max-width: 799px) 100vw, 1200px",
};

function makeSrcset(imgSrc) {
    
	let markup = [];
    let width = 400;

    for (let i = 0; i<5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;
    }

    return markup.join();
}


for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
    let srcset = makeSrcset(imgSrc);
    IMAGES[i].setAttribute("srcset", srcset);
	console.log(srcset);


    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
	console.log(sizes);

}