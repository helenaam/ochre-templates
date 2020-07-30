var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    debugMode: false,
    //showNavigator: 'TRUE',
    //navigatorOpacity: 0.8,
    //navigatorBackground: '#ffffff',
    //navigatorBorderColor: '#e6e6e6',
    //navigatorPosition: "TOP_RIGHT",
    //navigatorSizeRatio: 0.2,

    //collectionMode: true,
    //collectionRows: 2,
    //collectionTileSize: 1024,
    //collectionTileMargin: 256,
    tileSources:{
                type: 'image',
                url: 'assets/image1.jpg',
                buildPyramid: false
            },

});
