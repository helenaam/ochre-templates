var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "openseadragon-bin-2.4.2/images/",
    tileSources: {
	type: 'image',
	url: 'assets/image1.jpg',
	buildPyramid: false
    }
});
