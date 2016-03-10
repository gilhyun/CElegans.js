/* C. Elegans Connectome ported to Javascript
/* Based on the python GoPiGo Connectome by Timothy Busbice, Gabriel Garrett, Geoffrey Churchill
/* Find it here: https://github.com/Connectome/GoPiGo
/* Pls do not remove this header - zrispo
 */

var BRAIN = {};

BRAIN.presynatptic = {};
BRAIN.presynatptic["ADAL"] = [0,0]

BRAIN.postsynaptic = {};
BRAIN.postsynaptic["ADAL"] = function() { 
	// do the things
};

BRAIN.presynatptic["ADAL"][0] = 1000;
BRAIN.presynatptic["ADAL"][1] = 9999;

BRAIN.presynatptic["ADAL"][0] += 2000;

BRAIN.presynatptic["ADAL"][0] = BRAIN.presynatptic["ADAL"][1];

BRAIN.presynatptic["ADAL"][1] += 1000;

alert(BRAIN.presynatptic["ADAL"][0]);
alert(BRAIN.presynatptic["ADAL"][1]);