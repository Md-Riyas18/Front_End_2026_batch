create database nathiya;
use nathiya;

create table employee(

id int primary key auto_increment,
name varchar(20) not null,
useremail varchar(30) not null unique,
age int not null,
course varchar(20) not null,
salary int,
createat timestamp default current_timestamp,
createby varchar(20) default "nathi",
updateat timestamp default current_timestamp,
updateby varchar(20) not null,
status boolean default true

);

select * from employee;

select distinct salary  from employee;

select age as Employee_Age from  employee;

select name,salary as Emp_Salary from employee where salary > 40000;

select age,salary from employee where (age between 28 and 40 ) and salary > 50000;

select * from employee where course  in ('Computer Science','Data Analytics');

select * from employee where course like "d%";

select * from employee order by salary asc limit 4 offset 1;

SELECT CONCAT(age, ' - ', course)
AS EmployeeDetails
FROM employee;




