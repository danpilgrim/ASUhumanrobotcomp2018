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

/* NOTES FROM teleop_key_handyman.cpp from Handyman-ROS
const float linear_coef         = 0.2f;

float move_speed = 1.0f;

moveBase(pub_base_twist, +linear_coef*move_speed, 0.0, 0.0);

ros::Publisher  pub_base_twist = node_handle.advertise<geometry_msgs::Twist> (pub_base_twist_topic_name, 10);


vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

void HandymanTeleopKey::moveBase(ros::Publisher &publisher, double linear_x, double linear_y, double angular_z)
{
  geometry_msgs::Twist twist;

  twist.linear.x  = linear_x;
  twist.linear.y  = linear_y;
  twist.linear.z  = 0.0;
  twist.angular.x = 0.0;
  twist.angular.y = 0.0;
  twist.angular.z = angular_z;

  publisher.publish(twist);
}

*/

// creates our topic
var cmd_vel = new ROSlib.Topic({
    ros: ROS,
    name: "/hsrb/opt_command_velocity",          // NOTE: make sure names are correct!
    messageType: "geometry_msgs/Twist"
});


//creates our message
var message = new ROSlib.Message({
    linear:{
        x: 0.20000000298,
        y: 0,
        z: 0
    },
    angular:{
        x: 0,
        y: 0,
        z: 0
    }
});

//displays messaes to turtlesim
cmd_vel.subscribe(function(message){
    console.log(message)
});

//publishes our message
cmd_vel.publish(message);
