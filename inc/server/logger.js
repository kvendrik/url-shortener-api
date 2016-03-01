let chalk = require('chalk');

let logger = {

	_getCurrTimeStr: function(){
		let date = new Date();
		return chalk.blue('['+date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear()+
		' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'] ');
	},

	_log: function(color, str){
		console.log(this._getCurrTimeStr()+chalk[color](str));
	},

	_parseArgs: function(args){
		let str = '';
		for(let idx in args){
			let curr = args[idx];
			if(typeof curr === 'object'){
				curr = JSON.stringify(curr, null, 4);
			}
			str += curr+' ';
		}
		return str;
	},
	
	log: function(){
		let str = this._parseArgs(arguments);
		this._log('white', str);
	},

	warn: function(){
		let str = this._parseArgs(arguments);
		this._log('yellow', str);
	},

	error: function(){
		let str = this._parseArgs(arguments);
		this._log('red', str);
	}

};

module.exports = logger;