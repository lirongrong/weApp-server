var express = require('express');    
var app = express();   
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get("/getUser.php",function(req,res){
	var list=[
        {
            img:"../../image/adam.jpg",
            name:"王浩",
            message:"哈哈",
            time:"22:00",
            count:1,
            id:"1"
        },
        {
            img:"../../image/ben.png",
            name:"成凤杰",
            message:"干什么呢",
            time:"17:30",
            count:0,
            id:"2"
        },
        {
            img:"../../image/max.png",
            name:"梁雨",
            message:"O(∩_∩)O",
            time:"16:00",
            count:0,
            id:"3"
        },
        {
            img:"../../image/mike.png",
            name:"廖芳樱",
            message:"那先不管了",
            time:"14:00",
            count:14,
            id:"4"
        },
        {
            img:"../../image/perry.png",
            name:"邓福滨",
            message:"可以",
            time:"10:00",
            count:7,
            id:"5"
        }
    ]
	res.send(list);
})
app.post("/getMsg.php",function(req,res){
	console.log("请求到了getMsg")
	var id = req.body.id
	var data_1 = [
          {
            img:"../../image/adam.jpg",
            text:"你好",
            me:false
          },
          {
            img:"../../image/adam.jpg",
            text:"哈哈",
            me:true
          },
          {
            img:"../../image/adam.jpg",
            text:"你好",
            me:false
          },
          {
            img:"../../image/adam.jpg",
            text:"哈哈",
            me:true
          }
        ]
    var data_2 = [
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"干什么呢",
            me:false
          }
        ];
    var data_3 = [
          {
            img:"../../image/max.png",
            text:"hi",
            me:false
          },
          {
            img:"../../image/ben.png",
            text:"hi",
            me:true
          },
          {
            img:"../../image/max.png",
            text:"O(∩_∩)O",
            me:false
          }
        ];
    var data_4 = [
          {
            img:"../../image/mike.png",
            text:"搞好了吗",
            me:false
          },
          {
            img:"../../image/mike.png",
            text:"没有",
            me:true
          },
          {
            img:"../../image/mike.png",
            text:"那先不管了",
            me:false
          }
        ];
    var data_5 = [
          {
            img:"../../image/perry.png",
            text:"请我吃饭",
            me:true
          },
          {
            img:"../../image/perry.png",
            text:"可以",
            me:false
          }
        ]
	switch(id){
		case "1":res.send(data_1);break;
		case "2":res.send(data_2);break;
		case "3":res.send(data_3);break;
		case "4":res.send(data_4);break;
		case "5":res.send(data_5);break;
	}
})
app.set("port",8999);
app.listen(app.get("port"),function(){
    console.log("服务器已启动...");
})