cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
        "id": "cordova.plugins.diagnostic.Diagnostic",
        "clobbers": [
            "cordova.plugins.diagnostic"
        ]
    },
    {
        "file": "plugins/cordova-plugin-request-location-accuracy/www/RequestLocationAccuracy.js",
        "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
        "clobbers": [
            "cordova.plugin.locationAccuracy"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "cordova.plugins.diagnostic": "2.2.1",
    "cordova-plugin-request-location-accuracy": "1.0.0"
}
// BOTTOM OF METADATA
});