CREATE TABLE person(
    BookingId SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    noOfPeople INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    adhaar INT NOT NULL
);
CREATE TABLE room(
    Type VARCHAR(20),
    RoomNumber INT PRIMARY KEY,
    UNIQUE(RoomNumber)
);
CREATE TABLE bill(
    transacrionID SERIAL PRIMARY KEY,
    PaymentMode VARCHAR(255) NOT NULL,
    Amount INT NOT NULL,
    Date VARCHAR(10),
    Time VARCHAR(20)
);