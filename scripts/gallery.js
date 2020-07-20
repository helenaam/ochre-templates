var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    tileSources: {
    	type: 'image',
    	url: 'assets/image1.jpg',
    	buildPyramid: false
    }
    // tileSources: ["assets/image1.jpg", "assets/image2.jpg"]
});
