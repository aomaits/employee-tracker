INSERT INTO department (department_name)
VALUES ("Finance"),
        ("Marketing"),
        ("Sales"),
        ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("CFO", 110000, 1),
    ("CMO", 120000, 2),
    ("VP", 125000, 3),
    ("Financial Analyst", 88000, 1),
    ("Accountant", 91000, 1),
    ("Account Executive", 75000, 2),
    ("Brand Management", 83000, 2),
    ("Sales Representative", 77000, 3),
    ("Account Manager", 80000, 3),
    ("Design Engineer", 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Morgan", 2, null),
    ("Megan", "Rapinoe", 1, null),
    ("Rose", "Lavelle", 10, null),
    ("Julie", "Ertz", 9, 8),
    ("Trinity", "Rodman", 8, 8),
    ("Sophia", "Smith", 7, 1),
    ("Alyssa", "Thompson", 6, 1),
    ("Lindsey", "Horan", 3, null),
    ("Lynn", "Williams", 5, 2),
    ("Emily", "Fox", 4, 2);
