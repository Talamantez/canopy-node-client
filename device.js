module.exports = {
		id: function(id){
			this.id = id
		},
		set: function(param, value){
			Object.defineProperty(this, param, {
			    value: value,
			    writable: true,
			    enumerable: true,
			    configurable: true
		});
	}
}