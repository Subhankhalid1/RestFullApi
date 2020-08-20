import React from 'react'
function Contact(props) {
    return (
        <div>
            <center><h1>Startups Employees Detail</h1></center>
            
            {props.contacts.map((contact, index) => (
                <div className="card" key={index} style={{width:"500px", height:"200px", margin:"3%", marginLeft:"32%"}}>
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p className="card-text">{contact.company.catchPhrase}</p>
                        <h6 className="card-subtitle mb-2 text-muted">Official_url: ({contact.website})</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default Contact;
