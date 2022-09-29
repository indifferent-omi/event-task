import ButtonGradient from "../components/Button/ButtonGradient";

const CreateEvent = ()=>{
  return(
    <div className="container py-24">
    <h2>Create Event Page</h2>
    <form action="">
      <input placeholder="Event Name"/>
      <textarea placeholder="Event Details"/>

    </form>
    <ButtonGradient to="/event">
      Next
    </ButtonGradient>
    </div>)
}

export default CreateEvent;