import React from 'react'
import Person from './Person'

function NameList() {

    // const names = ['abc', 'def', 'ghi']
    // const NameList = names.map(name => <div>{name}</div>)
    // return (
    //     <div>
    //        {
    //         NameList 
    //        }
    //     </div>
    // )

    const student = [
        {
            id: 1,
            name: 'Pranay',
            rollno: 10,
            class: 'BE'
        },
        {
            id: 2,
            name: 'Alfi',
            rollno: 20,
            class: 'BE'
        },
        {
            id: 3,
            name: 'Sandeep',
            rollno: 20,
            class: 'BE'
        },
        {
            id: 4,
            name: 'Narayan',
            rollno: 40,
            class: 'BE'
        },
        {
            id: 5,
            name: 'Atharva',
            rollno: 50,
            class: 'TE'
        },


    ]

    // const students = student.map(index =>(
    //     <div>I am {index.name}.{index.rollno}years{index.class}</div>)
    // ) 
    //passing props sto another component
    const students = student.map(index => (
        <Person studentData={index} />)
    )

    return (
        <div>
            {students}
        </div>

    )


}

export default NameList
