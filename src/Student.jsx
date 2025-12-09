import React from 'react'

function Student() {
  const students = [
    {id:1,name:"Shuhaib",place:"kozhikode"},
    {id:2,name:"ameen",place:"malappuiram"},
    {id:3,name:"shilpa",place:"idukki"},
    {id:4,name:"nanadan",place:"palakkad"},
    {id:5,name:"aromal",place:"trissure"},
  ]
    return (
    <div className='container p-5'>
        <table className='table table-bordered table-hover'>
            <thead className='text-success'>
            <th>ID</th>
            <th>NAME</th>
            <th>PLACE</th>
        </thead>
        <tbody>
            {
                    students.length >0 ?
                    students.map((stud)=>(
                        <tr>
                            <td>{stud.id}</td>
                            <td>{stud.name}</td>
                            <td>{stud.place}</td>
                        </tr>
                    ))

                    : <h1>No Data</h1>
            }
        </tbody>
        </table>

    </div>
  )
}

export default Student

// turnary op 