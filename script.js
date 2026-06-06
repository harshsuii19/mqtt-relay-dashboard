// HiveMQ details

const broker =
"wss://YOUR_CLUSTER_URL:8884/mqtt";


const options = {

username:"YOUR_USERNAME",

password:"YOUR_PASSWORD"

};



const client = mqtt.connect(
broker,
options
);



client.on("connect",()=>{


console.log("MQTT Connected");


document.getElementById("connection")
.innerHTML="Connected";


client.subscribe(
"home/relay/status"
);


});





client.on("message",
(topic,message)=>{


let state =
message.toString();



document.getElementById("status")
.innerHTML =
"Status: "+state;



});





function relayON(){


client.publish(
"home/relay",
"ON"
);


}





function relayOFF(){


client.publish(
"home/relay",
"OFF"
);


}
