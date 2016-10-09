requirejs.config({

    baseUrl:'static/js',
    paths:{
        /*'jquery': 'jquery-1.10.1.min',
        'jq_number': 'jquery.number'*/
	weka : 'wekalib'
    },
    shim:{
    }
});
 
require( [
	'weka'
    ],


    function (jquery, jq_number) {
    }
);
