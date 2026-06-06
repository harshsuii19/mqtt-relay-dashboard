const broker =
"wss://1714f1bf966d4d0f8a68ca02d01e59a8.s1.eu.hivemq.cloud:8884/mqtt";


const options = {

username:"harshwardhangaikwad",

password:"hello19G"

};


const client = mqtt.connect(
broker,
options
);



client.on("connect",()=>{


console.log("MQTT Connected");


document.getElementById("connection")
.innerHTML="Connected ✅";



client.subscribe(
"home/temperature"
);


});




client.on("message",
(topic,message)=>{


let temp =
message.toString();



document.getElementById("temp")
.innerHTML =
"Temperature: "+temp+" °C";


});




client.on("error",(error)=>{


console.log(error);


document.getElementById("connection")
.innerHTML="Connection Failed";


});
