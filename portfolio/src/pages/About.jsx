import { useEffect, useState } from "react"
import Card from "../component/card"
import axios from "axios";

function About() {
    const [projects, setProject] = useState([{ id: "", title: "", price: 0, image: "" }]);



    useEffect(() => {
        axios.get("/api.json")
            .then((response) => {
                console.log(response.data)
                setProject(response.data);

            })
    }, [])

    return (
        <div>
            <h1>About</h1>
            {projects.map((item) => (
                <div className="card w-25 gap-4" key={item.id}>
                    <div className="card-title ">
                        <h4>{item.title}</h4>
                        <p>Price: ₹{item.price}</p>
                        <img src={item.image} width="100%" alt={item.title} />
                    </div>
                </div>
            ))}

        </div>
    )
}
export default About