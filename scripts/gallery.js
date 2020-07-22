var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    collectionMode: true,
    collectionRows: 1,
    collectionTileSize: 1024,
    collectionTileMargin: 256,
    
    // Code for one image:
    
    // tileSources: {
    // 	type: 'image',
    // 	url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'
    // 	// buildPyramid: false
    // }

    // Only one image appears:
    
    // tileSources: {
    // 	type: 'image',
    // 	url: ["http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image", "http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image"]
    // }

    // Nothing appears on page:
    
    // tileSources: {
    // 	[type: 'image',
    // 	 url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'],
    // 	[type: 'image',
    // 	 url: 'http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image']
    // }

    // Produces HTTP 0:
    
    // tileSources: ["http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image", "http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image"]

});

// Only one image appears:

// var viewer2 = OpenSeadragon({
//     id: "seadragon-viewer-2",
//     prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
//     tileSources: {
// 	type: 'image',
// 	url: 'assets/image2.jpg'
//     }
// })

// Only one image appears:

// viewer.addTiledImage({
//     tileSource: 'assets/image2.jpg',
//     // tileSources: {
//     // 	type: 'image',
//     // 	url: 'assets/image2.jpg'
//     // },
//     x: 1,
//     y: 0,
//     width: 10,
//     // preload: true
// });


