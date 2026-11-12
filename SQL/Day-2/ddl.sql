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
