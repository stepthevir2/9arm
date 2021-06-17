const cbd = require("clipboardy");

setInterval(function() {
	const readClip = cbd.readSync();
	const checkClip = readClip.split(" ");
	if (checkClip[0] != "!kick") {
		cbd.writeSync("!kick " + readClip);
		console.log("Copied !kick " + readClip);
	}
}, 1000);
