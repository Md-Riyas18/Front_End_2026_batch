SELECT * FROM nathiya.employee;

INSERT INTO employee (name, useremail, age, course, salary, createby, updateby, status) VALUES
('Arjun Kumar', 'arjun.k@example.com', 28, 'Computer Science', 65000, 'admin', 'admin', TRUE),
('Priya Sharma', 'priya.s@example.com', 25, 'Data Analytics', 58000, 'nathi', 'nathi', TRUE),
('Karthik Raja', 'karthik.r@example.com', 32, 'Full Stack Dev', 78000, 'admin', 'hr_team', TRUE),
('Ananya Nair', 'ananya.n@example.com', 24, 'UI UX Design', 52000, 'nathi', 'nathi', TRUE),
('Vikram Singh', 'vikram.s@example.com', 35, 'Cloud Computing', 92000, 'hr_team', 'hr_team', TRUE),
('Meera Menon', 'meera.m@example.com', 29, 'Cyber Security', 74000, 'admin', 'admin', FALSE),
('Rohan Verma', 'rohan.v@example.com', 26, 'Machine Learning', 68000, 'nathi', 'admin', TRUE),
('Divya Sri', 'divya.sri@example.com', 23, 'Web Development', 45000, 'nathi', 'nathi', TRUE),
('Suresh Babu', 'suresh.b@example.com', 41, 'Project Mgmt', 105000, 'admin', 'hr_team', TRUE),
('Kavya Krishnan', 'kavya.k@example.com', 27, 'Software Testing', 55000, 'hr_team', 'hr_team', FALSE),
('Aditya Rao', 'aditya.r@example.com', 30, 'DevOps Eng', 82000, 'admin', 'admin', TRUE),
('Sneha Patel', 'sneha.p@example.com', 25, 'Business Analyst', 60000, 'nathi', 'nathi', TRUE);

-- 3 additional rows testing DEFAULT values for 'createby' ('nathi'), 'status' (TRUE), and NULL 'salary'
INSERT INTO employee (name, useremail, age, course, salary, updateby) VALUES
('Deepak Joshi', 'deepak.j@example.com', 31, 'Database Admin', 71000, 'admin'),
('Nandini Das', 'nandini.d@example.com', 22, 'Python Intern', NULL, 'nathi'),
('Harishankar M', 'harish.m@example.com', 34, 'AI Engineering', 95000, 'hr_team');


select * from employee where    course = "Computer Science" && salary > 30000;


CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    age INT,
    city VARCHAR(50)
);



INSERT INTO students VALUES
(1, 'Arun', 20, 'Chennai'),
(2, 'Priya', 22, 'Madurai'),
(3, 'Kumar', 17, 'Chennai'),
(4, 'Divya', 25, 'Coimbatore'),
(5, 'Ravi', 19, 'Madurai'),
(6, 'Meena', 26, 'Chennai'),
(7, 'Bala', 21, 'Chennai'),
(8, 'Anitha', 24, 'Madurai');


CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    stock INT,
    price DECIMAL(10,2)
);

INSERT INTO products VALUES
(1, 'Laptop', 'Electronics', 10, 55000),
(2, 'Mobile', 'Electronics', 20, 25000),
(3, 'Keyboard', 'Accessories', 50, 1500),
(4, 'Mouse', 'Accessories', 40, 800),
(5, 'Chair', 'Furniture', 15, 5000),
(6, 'Table', 'Furniture', 10, 12000),
(7, 'Monitor', 'Electronics', 12, 18000),
(8, 'Headphones', 'Accessories', 25, 3000);


select * from students where  age  between 18 and 25 and city in ("Madurai", "Chennai");


select city,count(*) from students group by city;

select category,sum(stock),avg(price) from products group by category;


select course,avg(salary) from employee where salary > 25000 group by course;
