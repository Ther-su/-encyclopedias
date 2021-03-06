const HOST_URI = 'https://mini.genielink.cn/wp-json/wp/v2/';

module.exports = {
	//获取分类列表
	getCategories: function () {
		var url = HOST_URI + 'categories?orderby=name&per_page=12';
		//var url = HOST_URI + 'categories?include=7,9,11,6,3,5,12,10,4,8,14,13&orderby=count&order=desc';
		//var url = HOST_URI +'categories'
		return url
	},
	  
	  //获取某个分类信息
	getCategoryByID: function (id) {
	    var dd = HOST_URI + 'categories/' + id;
	    return HOST_URI + 'categories/'+id;
	},
}