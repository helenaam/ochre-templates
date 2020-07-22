var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    showNavigator: 'TRUE',
    navigatorOpacity: 0.8,
    navigatorBackground: '#ffffff',
    navigatorBorderColor: '#e6e6e6',
    navigatorPosition: "TOP_RIGHT",
    navigatorSizeRatio: 0.2,
    tileSources: {
    	type: 'array',
        tileSource: ['http://ochre.lib.uchicago.edu/ochre?uuid=baf0d5ae-38fe-452b-aacc-6dc39bee2b06&image', 'http://ochre.lib.uchicago.edu/ochre?uuid=baf0d5ae-38fe-452b-aacc-6dc39bee2b06&image'],
    },
});
