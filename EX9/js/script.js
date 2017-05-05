var map = new BMap.Map("Map-Container");    // 创建Map实例

map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());

var Point  = new BMap.Point(120.156, 30.253);  //设置中心点(西湖)坐标
map.centerAndZoom(Point, 15);   //初始化地图，地图级别为15
var marker = new BMap.Marker(Point);
map.addOverlay(marker);
map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom();

var local = new BMap.LocalSearch(map, {
	renderOptions: {
		map: map,
		panel: "Result-Box"
	}
});
local.searchNearby("宾馆", "西湖景区");



var start="杭州师范大学仓前新校区";
var transit = new BMap.TransitRoute(map, {
	renderOptions: {
		map: map,
		panel: "Result-Box"
	},
	onResultsHtmlSet: function() {
		$("#Result-Box").show()
	}
});

local.setMarkersSetCallback(function(pos) {
	for(var i=0;i<pos.length;i++){
		pos[i].marker.addEventListener('click', function(e) {
			var p = this.getPosition();
			var myGeo = new BMap.Geocoder();
			// 根据坐标得到地址描述
			myGeo.getLocation(new BMap.Point(p.lng, p.lat), function(result) {
				if (result) {
					transit.search(start,result.address);
				}
			});
		})
	}
})


var markerArr = [  
	{ title: "杭州师范大学", point: "120.01428,30.295129", address: "体育场", img: "../img/666666.png" },  
	{ title: "杭州师范大学", point: "120.012313,30.296267", address: "篮球场", img: "../img/666666.png" },  
	{ title: "杭州师范大学", point: "120.019122,30.296399", address: "一鸣真鲜奶吧", img: "../img/666666.png" },  
	{ title: "杭州师范大学", point: "120.020407,30.295698", address: "恕园2号楼", img: "../img/666666.png" },
	{ title: "杭州师范大学", point: "120.019014,30.295269", address: "恕园7号楼", img: "../img/666666.png" },
	{ title: "杭州师范大学", point: "120.020029,30.294879", address: "阿里巴巴商学院", img: "../img/666666.png" },
	{ title: "杭州师范大学", point: "120.017721,30.296688", address: "恕园19号楼", img: "../img/666666.png" },
	{ title: "杭州师范大学", point: "120.01622,30.296649", address: "学生事务服务中心", img: "../img/666666.png" }
];

for (var i = 0; i < markerArr.length; i++) {  
    var p0 = markerArr[i].point.split(",")[0];  
    var p1 = markerArr[i].point.split(",")[1];  
    var maker = addMarker(new window.BMap.Point(p0, p1), i);  
    addInfoWindow(maker, markerArr[i], i);   
}

function addMarker(point, index) {  
    var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png",  
        new BMap.Size(23, 25), {  
            offset: new BMap.Size(10, 25),  
            imageOffset: new BMap.Size(0, 0 - index * 25)  
    });  
    var marker = new BMap.Marker(point, { icon: myIcon });  
    map.addOverlay(marker);  
    return marker;  
}

function addInfoWindow(marker, poi) {   
    var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';  
    var html = [];  
    html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');  
    html.push('<tr>');  
    html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');  
    html.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');   
    html.push('</tr>');  
    html.push('<tr>');
    html.push('<td style="vertical-align:top;line-height:16px;padding: 10px 0 0 30px">' + '<img src="' +poi.img + '", style="width: 160px;height: 100px">' + ' </td>');
    html.push('</tr>'); 
    html.push('</tbody></table>');  
    var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });  

    var openInfoWinFun = function () {  
        marker.openInfoWindow(infoWindow);  
    };  
    marker.addEventListener("click", openInfoWinFun);  
    return openInfoWinFun;  
}
















