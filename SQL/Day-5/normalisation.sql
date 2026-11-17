create database StudentManagement;
USE StudentManagement;

CREATE TABLE StudentCourse (
    StudentID INT,
    StudentName VARCHAR(50),
    CourseName VARCHAR(50),
    TrainerName VARCHAR(50),
    TrainerPhone VARCHAR(15),
    PRIMARY KEY (StudentID, CourseName)
);

INSERT INTO StudentCourse VALUES
(1, 'Riyas', 'React', 'Arun', '9876543210'),
(1, 'Riyas', 'Python', 'Kumar', '9876543211'),
(2, 'Rahul', 'React', 'Arun', '9876543210'),
(3, 'Ajay', 'Java', 'Suresh', '9876543212'),
(4, 'Vijay', 'Python', 'Kumar', '9876543211');

CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(50)
);

INSERT INTO Student VALUES
(1, 'Riyas'),
(2, 'Rahul'),
(3, 'Ajay'),
(4, 'Vijay');

CREATE TABLE Course (
    CourseName VARCHAR(50) PRIMARY KEY,
    TrainerName VARCHAR(50),
    TrainerPhone VARCHAR(15)
);

INSERT INTO Course VALUES
('React', 'Arun', '9876543210'),
('Python', 'Kumar', '9876543211'),
('Java', 'Suresh', '9876543212');

CREATE TABLE StudentCourseMapping (
    StudentID INT,
    CourseName VARCHAR(50),
    PRIMARY KEY (StudentID, CourseName),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseName) REFERENCES Course(CourseName)
);

INSERT INTO StudentCourseMapping VALUES
(1, 'React'),
(1, 'Python'),
(2, 'React'),
(3, 'Java'),
(4, 'Python');

CREATE TABLE Trainer (
    TrainerID INT PRIMARY KEY,
    TrainerName VARCHAR(50),
    TrainerPhone VARCHAR(15)
);

INSERT INTO Trainer VALUES
(1, 'Arun', '9876543210'),
(2, 'Kumar', '9876543211'),
(3, 'Suresh', '9876543212');

CREATE TABLE Course3 (
    CourseName VARCHAR(50) PRIMARY KEY,
    TrainerID INT,
    FOREIGN KEY (TrainerID) REFERENCES Trainer(TrainerID)
);

INSERT INTO Course3 VALUES
('React', 1),
('Python', 2),
('Java', 3);


SELECT
    s.StudentName,
    c.CourseName,
    t.TrainerName
FROM Student s
JOIN StudentCourseMapping sc
    ON s.StudentID = sc.StudentID
JOIN Course3 c
    ON sc.CourseName = c.CourseName
JOIN Trainer t
    ON c.TrainerID = t.TrainerID;