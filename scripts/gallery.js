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

    tileSources: [
	{
	    type: 'image',
	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'
	},
	{
	    type: 'image',
	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image'
	}
    ]

});
