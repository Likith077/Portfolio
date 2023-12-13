import { Link } from "react-router-dom";

export default function NotFound() {
    const paragraphStyle = {
        marginTop: '20%',
    };
    return (
       
        <div>
            <h1>Error 404 - Page NotFound!</h1>
            <center>
           <p style={paragraphStyle}>Sorry but the page you are looking for does not exist,
            have been removed or name changed or is temporarily unavailable.
              </p>
           
            <p>Go to the <Link to="/"><u>Homepage</u></Link>.</p>
            </center>
          
        </div>
        
    )
  
}

