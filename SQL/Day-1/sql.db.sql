create database where_house_db;
use where_house_db;
create table wherehouse(
id int auto_increment primary key unique,
wherehousename varchar(50) not null ,
wherehouseport varchar(50) unique,
location varchar(300) default"location" ,
price varchar(100) ,
isActive boolean default true,
createby varchar(100) not null default"mugundhan",
createat datetime,
updateby varchar(100) not null default"bala",
updateat datetime,
status boolean default true


);

create table product(
id int auto_increment primary key unique,
Product_Name varchar(50) not null,
Product_Quanity int default "01",
Product_Price varchar(100) ,
Product_Category varchar(100) default"laptop",
Product_Barcode varchar(100) not null,
Product_Add_Date datetime not null,
isActive boolean default true,
createby varchar(100) not null default"mugundhan",
createat datetime,
updateby varchar(100) not null default"bala",
updateat datetime,
status boolean default true




);