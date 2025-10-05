import { CardProps } from "../component/cardProps"

function Service(){
    return(
        <div >
            <h1 className="text-center">Service</h1>
            <div className="d-flex align-item-center justify-content-center gap-4" >
                <CardProps 
              title="E-commerce Platform"
              descriptioon="Full-featured online store with payment integration, admin dashboard, and product management."
              path="/image/ecommerce.png"
            />
             <CardProps 
              title="Task Management App"
              descriptioon="Collaborative task management application with real-time updates and user authentication."
              path="/image/task.png"
            />
             <CardProps 
              title="Task Management App"
              descriptioon="Collaborative task management application with real-time updates and user authentication."
              path="/image/task.png"
            />
            </div>
        </div>
    )
}
export default Service