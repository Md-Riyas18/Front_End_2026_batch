create database college_db;

use college_db;

create table students(

Student_Id int primary key unique auto_increment,  
Student_Name varchar(60) not null,
Student_Age varchar(60) not null,
Student_Email varchar(60) not null,
Student_Course varchar(70) not null,
Student_Fees varchar(80) not null,
Student_Admission_Date date not null,
createby  varchar(80) default "Admin",
createat datetime default current_timestamp,
updateby varchar(80),
updateat datetime default current_timestamp,
status boolean default TRUE 

);

rename table students to student_details;

alter table student_details add Mobile_Number int AFTER Student_Age;


create table employees(

Employees_ID int primary key auto_increment unique ,
Employees_Name varchar(60) not null,
Employees_Salary varchar(60) not null,
Employees_Department varchar(50) not null,
Employees_Joining_Date date not null,
Employees_City timestamp default current_timestamp

);

alter table employees change Employees_Name Employee_Name varchar(60);

alter table employees modify Employees_Salary DECIMAL(12,2);

alter table employees add Employee_Email varchar(50) after Employee_Name;


create table Products(

Product_ID int unique primary key auto_increment,
Product_Name varchar(50),
Product_Price varchar(50),
Product_Category varchar(50),
Product_Stock varchar(50),
Product_Manufacturing_Date date
);


alter table Products modify Product_Name varchar(50) not null ;

alter table Products modify Product_price varchar(50) not null;

alter table Products alter column Product_Category set default "Laptop";

alter table Products alter column Product_Manufacturing_Date set default "2026-12-01";

insert into Products (Product_Name,Product_Price,Product_Stock) values("Asus","Rs:40,000","5");
insert into Products (Product_Name,Product_Price,Product_Stock) values("Asus","Rs:40,000","5");
insert into Products (Product_Name,Product_Price,Product_Stock) values("Lenova","Rs:50,000","7");
insert into Products (Product_Name,Product_Price,Product_Stock) values("Acer","Rs:90,000","10");
insert into Products (Product_Name,Product_Price,Product_Stock) values("Rog","Rs:110,000","15");
insert into Products (Product_Name,Product_Price,Product_Stock) values("HP","Rs:50,000","13");
insert into Products (Product_Name,Product_Price,Product_Stock) values("Think pad","Rs:70,000","3");

create table Department(
Department_Id int unique primary key auto_increment,
Department_Name varchar(50) not null,
Department_Category varchar(50) not null,
Department_Count int not null


);


insert into Department (Department_Name,Department_Category,Department_Count) values("MERN","FS",15);
insert into Department (Department_Name,Department_Category,Department_Count) values("Java","BS",5);
insert into Department (Department_Name,Department_Category,Department_Count) values("Python","FS",50);
insert into Department (Department_Name,Department_Category,Department_Count) values("Dotnet","Bs",405);






