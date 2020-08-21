import React from 'react'
function Contact(props) {
    return (
        <div >
            <h3 style={{ margin:"1%", marginLeft:"15%"}}>Startups Employees Details</h3>
            
            {props.contacts.map((contact, index) => (
                <div className="card" key={index} style={{width:"300px", height:"200px", margin:"2%", marginLeft:"26%"}}>
                   <center> <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p className="card-text">{contact.company.catchPhrase}</p>
                        <h6 className="card-subtitle mb-2 text-muted">Official_url: ({contact.website})</h6>
                    </div>
                    </center>
                </div>
            ))}
        </div>
    )
};
export default Contact;
