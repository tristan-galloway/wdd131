const employees = [
    {
        firstName:"John",
        lastName:"Doe", 
        positions: ["Pasta", "Topper", "Mixer"], 
        phoneNum: "1234567890",
        profileIMG: "images/profile_picture_placeholder.png",
        shifts: [
            {
                position: "Pasta",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/01/2025"
            },
            {
                position: "Topper",
                startTime: "9:00am",
                endTime: "4:30pm",
                length: "7.5 Hours",
                date: "01/02/2025"
            },
            {
                position: "Mixer",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/03/2025"
            },
        ]
    },
    {
        firstName:"Anna", 
        lastName:"Smith", 
        positions: ["Mixer", "Pasta"], 
        phoneNum: "2234567890",
        profileIMG: "images/profile_picture_placeholder.png",
        shifts: [
            {
                position: "Mixer",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/01/2025"
            },
            {
                position: "Pasta",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/02/2025"
            }
        ]
    },
    {
        firstName:"Peter", 
        lastName:"Jones", 
        positions:["Topper", "Cashier", "Salad"], 
        phoneNum: "3234567890",
        profileIMG: "images/profile_picture_placeholder.png",
        shifts: [
            {
                position: "Topper",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/01/2025"
            },
            {
                position: "Cashier",
                startTime: "9:00am",
                endTime: "4:30pm",
                length: "7.5 Hours",
                date: "01/02/2025"
            },
            {
                position: "Salad",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/03/2025"
            },
        ]
    },
    {
        firstName:"Tristan", 
        lastName:"Galloway", 
        positions:["Topper", "Cashier", "Salad", "Manager", "Pasta", "Mixer"], 
        phoneNum: "2068664291",
        profileIMG: "images/profile_picture_placeholder.png",
        shifts: [
            {
                position: "Topper",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/01/2025"
            },
            {
                position: "Cashier",
                startTime: "9:00am",
                endTime: "4:30pm",
                length: "7.5 Hours",
                date: "01/02/2025"
            },
            {
                position: "Salad",
                startTime: "9:00am",
                endTime: "5:00pm",
                length: "8 Hours",
                date: "01/03/2025"
            },
        ]
    }
]

export default employees;