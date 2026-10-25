const products = [

{
id:1,
name:"Sony WH-CH520 Wireless Headphones",
price:2999,
rating:4.5,
image:"images/headphone.jpg",
category:"Audio",
brand:"Sony",
stock:"In Stock",
description:"Lightweight wireless headphones with crystal-clear sound, deep bass, and up to 50 hours of battery life.",
specifications:{
color:"Black",
battery:"50 Hours",
connectivity:"Bluetooth 5.2",
warranty:"1 Year"
}
},

{
id:2,
name:"Apple Smart Watch Series SE",
price:24999,
rating:4.8,
image:"images/laptop.jpg",
category:"Wearables",
brand:"Apple",
stock:"In Stock",
description:"Advanced smartwatch with fitness tracking, heart rate monitoring, and seamless smartphone integration.",
specifications:{
display:"Retina OLED",
battery:"18 Hours",
waterResistance:"50m",
warranty:"1 Year"
}
},

{
id:3,
name:"Logitech G102 Gaming Mouse",
price:1499,
rating:4.4,
image:"images/mouse.jpg",
category:"Gaming",
brand:"Logitech",
stock:"In Stock",
description:"High-performance gaming mouse with RGB lighting and precision tracking.",
specifications:{
dpi:"8000 DPI",
buttons:"6",
lighting:"RGB",
warranty:"2 Years"
}
},

{
id:4,
name:"JBL Flip 6 Bluetooth Speaker",
price:7999,
rating:4.7,
image:"images/speaker.jpg",
category:"Audio",
brand:"JBL",
stock:"In Stock",
description:"Portable Bluetooth speaker delivering powerful sound and deep bass.",
specifications:{
battery:"12 Hours",
waterproof:"IP67",
connectivity:"Bluetooth",
warranty:"1 Year"
}
},

{
id:5,
name:"Redragon Mechanical Keyboard",
price:3499,
rating:4.6,
image:"images/keyboard.jpg",
category:"Gaming",
brand:"Redragon",
stock:"In Stock",
description:"Mechanical gaming keyboard with RGB backlighting and tactile switches.",
specifications:{
switches:"Blue Switch",
lighting:"RGB",
keys:"104",
warranty:"1 Year"
}
},

{
id:6,
name:"Aluminum Laptop Stand",
price:999,
rating:4.3,
image:"images/stand.jpg",
category:"Accessories",
brand:"Portronics",
stock:"In Stock",
description:"Ergonomic laptop stand designed for improved posture and airflow.",
specifications:{
material:"Aluminum",
compatibility:"Up to 17 inch",
weight:"700g",
warranty:"6 Months"
}
},

{
id:7,
name:"USB-C Multiport Hub",
price:699,
rating:4.2,
image:"images/hub.jpg",
category:"Accessories",
brand:"Anker",
stock:"In Stock",
description:"Compact USB-C hub with multiple ports for enhanced connectivity.",
specifications:{
ports:"6",
interface:"USB-C",
speed:"5Gbps",
warranty:"1 Year"
}
},

{
id:8,
name:"Mi Power Bank 20000mAh",
price:1299,
rating:4.5,
image:"images/bank.jpg",
category:"Accessories",
brand:"Xiaomi",
stock:"In Stock",
description:"High-capacity power bank with fast charging support.",
specifications:{
capacity:"20000mAh",
output:"18W",
ports:"2",
warranty:"1 Year"
}
},

{
id:9,
name:"Logitech HD Webcam",
price:2499,
rating:4.4,
image:"images/webcam.jpg",
category:"Computer",
brand:"Logitech",
stock:"In Stock",
description:"HD webcam ideal for online classes, meetings, and streaming.",
specifications:{
resolution:"1080p",
microphone:"Built-in",
usb:"USB 2.0",
warranty:"2 Years"
}
},

{
id:10,
name:"Dell 24-inch Monitor",
price:10999,
rating:4.7,
image:"images/monitor.jpg",
category:"Computer",
brand:"Dell",
stock:"In Stock",
description:"Full HD monitor with vibrant colors and thin bezels.",
specifications:{
size:"24 Inch",
resolution:"1920x1080",
refreshRate:"75Hz",
warranty:"3 Years"
}
},

{
id:11,
name:"Samsung 1TB SSD",
price:3999,
rating:4.8,
image:"images/ssd.jpg",
category:"Storage",
brand:"Samsung",
stock:"In Stock",
description:"High-speed SSD for faster boot times and data transfer.",
specifications:{
capacity:"1TB",
interface:"SATA",
speed:"560MB/s",
warranty:"5 Years"
}
},

{
id:12,
name:"Boat Airdopes Earbuds",
price:1799,
rating:4.4,
image:"images/earbuds.jpg",
category:"Audio",
brand:"Boat",
stock:"In Stock",
description:"True wireless earbuds with immersive sound and long battery life.",
specifications:{
battery:"30 Hours",
bluetooth:"5.3",
waterproof:"IPX4",
warranty:"1 Year"
}
},

{
id:13,
name:"Mi Fitness Band",
price:2499,
rating:4.3,
image:"images/fitness-band.jpg",
category:"Wearables",
brand:"Xiaomi",
stock:"In Stock",
description:"Fitness tracker with heart rate, sleep, and activity monitoring.",
specifications:{
display:"AMOLED",
battery:"14 Days",
waterproof:"5ATM",
warranty:"1 Year"
}
},

{
id:14,
name:"Samsung Galaxy Smartphone",
price:19999,
rating:4.7,
image:"images/smartphone.jpg",
category:"Mobiles",
brand:"Samsung",
stock:"In Stock",
description:"Powerful smartphone with excellent camera performance and battery life.",
specifications:{
display:"6.6 Inch",
storage:"128GB",
ram:"8GB",
battery:"5000mAh"
}
},

{
id:15,
name:"Apple iPad Tablet",
price:35999,
rating:4.9,
image:"images/tablet.jpg",
category:"Tablets",
brand:"Apple",
stock:"In Stock",
description:"Premium tablet ideal for entertainment, study, and productivity.",
specifications:{
display:"10.9 Inch",
storage:"256GB",
chip:"A14 Bionic",
battery:"10 Hours"
}
},

{
id:16,
name:"American Tourister Backpack",
price:1499,
rating:4.5,
image:"images/backpack.jpg",
category:"Fashion",
brand:"American Tourister",
stock:"In Stock",
description:"Durable and stylish backpack with multiple compartments.",
specifications:{
capacity:"32L",
material:"Polyester",
weight:"600g",
warranty:"1 Year"
}
},

{
id:17,
name:"Ergonomic Office Chair",
price:7999,
rating:4.6,
image:"images/chair.jpg",
category:"Furniture",
brand:"Green Soul",
stock:"In Stock",
description:"Comfortable office chair with lumbar support and adjustable height.",
specifications:{
material:"Mesh",
weightCapacity:"120kg",
adjustable:"Yes",
warranty:"3 Years"
}
},

{
id:18,
name:"LED Desk Lamp",
price:999,
rating:4.4,
image:"images/lamp.jpg",
category:"Home",
brand:"Philips",
stock:"In Stock",
description:"Energy-efficient LED desk lamp with adjustable brightness.",
specifications:{
power:"12W",
brightness:"3 Levels",
usbCharging:"Yes",
warranty:"1 Year"
}
},

{
id:19,
name:"HP Inkjet Printer",
price:6999,
rating:4.5,
image:"images/printer.jpg",
category:"Office",
brand:"HP",
stock:"In Stock",
description:"All-in-one printer for printing, scanning, and copying.",
specifications:{
type:"Inkjet",
connectivity:"WiFi",
speed:"20ppm",
warranty:"1 Year"
}
},

{
id:20,
name:"TP-Link WiFi Router",
price:2499,
rating:4.5,
image:"images/router.jpg",
category:"Networking",
brand:"TP-Link",
stock:"In Stock",
description:"High-speed dual-band router for seamless internet connectivity.",
specifications:{
speed:"1200Mbps",
bands:"Dual Band",
antennas:"4",
warranty:"3 Years"
}
}

];