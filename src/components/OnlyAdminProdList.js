import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OnlyAdminCandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        getCandidates();
    }, [])

    const getCandidates = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setCandidates(result);
    }

    const deleteCandidate = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        })
        result = await result.json()
        if (result) {
            alert("Candidate is deleted")
        }
    }


    return (
        <div className="product-list">
            <h3>Candidate List</h3>

            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Email</li>
                <li>Rollno</li>
                <li>Operation</li>
                <li>No of votes</li>
            </ul>
            {
                candidates.length>0 ? candidates.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteCandidate(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>
                        <li>{item.votes}</li>

                    </ul>
                ):<h1>No Candidates Found</h1>
            }
        </div>
    )
}

export default OnlyAdminCandidateList;