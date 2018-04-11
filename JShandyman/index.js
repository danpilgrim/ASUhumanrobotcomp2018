var ROSlib = require("roslib");
var ROS = new ROSlib.Ros({
    url: "ws://localhost:9090"
});


//console log
ROS.on('connection', function() {
console.log('Connected to websocket server.');
});
ROS.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});
ROS.on('close', function() {
console.log('Connection to websocket server closed.');
});



// creates our topic
var cmd_vel = new ROSlib.Topic({
    ros: ROS,
    name: "/turtle1/cmd_vel",          // NOTE: make sure names are correct!
    messageType: "geometry_msgs/Twist"
});

//creates our message
var message = new ROSlib.Message({
    linear:{
        x: 1,
        y: 2,
        z: 3
    },
    angular:{
        x: 1,
        y: 2,
        z: 3
    }
});

//displays messaes to turtlesim
cmd_vel.subscribe(function(message){
    console.log(message)
});

//publishes our message
cmd_vel.publish(message);
