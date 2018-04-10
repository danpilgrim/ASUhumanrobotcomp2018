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


/*
const float linear_coef         = 0.2f;

float move_speed = 1.0f;

moveBase(pub_base_twist, +linear_coef*move_speed, 0.0, 0.0);

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
