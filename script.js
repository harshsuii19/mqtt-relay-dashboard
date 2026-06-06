// HiveMQ details

const broker =
"wss://1714f1bf966d4d0f8a68ca02d01e59a8.s1.eu.hivemq.cloud:8884/mqtt";


const options = {

username:"harshwardhangaikwad",

password:"harshG19"

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
