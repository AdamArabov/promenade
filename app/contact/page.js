import Card from "../components/card"


export default function Contact() {
    return (
        
        <Card>
        <div className="text-center">
          <h1 className="font-bold text-xl">BUSINESS HOURS</h1>
          <p className="text-xl">Monday-Thursday</p>
          <p>12:00pm - 9:00pm</p>
          <p className="font-semibold">
            <span className="text-xl font-bold">Friday</span>
            <br  />
            12:00pm - 7:00pm
          </p>
          <p className="text-xl">Saturday- Sunday</p>
          <p>12:00pm - 9:00pm</p>
        </div>
        <div className="text-center">
          <br />
          <h1 className="font-bold text-xl">CONTACT US</h1>
          <p>Phone:(718) 898-3215</p>
          <p>Email: promenadewine@gmail.com</p>
        </div>
      </Card>
    
     
    )
}