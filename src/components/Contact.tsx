
export default function Contact(){
    return (
        <section id='Contact'>
            <div>
                <h1 className="h1 items-center justify-center flex">Contact Me!</h1>
              <form>
               <label htmlFor="name"> Name:</label>
               <input type="text" placeholder="Enter Your Name" />

               <label htmlFor="email"> Email:</label>
               <input type="text" placeholder="Enter Your Email" />


               <label htmlFor="phone"> Phone Number:</label>
               <input type="number" placeholder="Enter Your Phone Number" />

               <label htmlFor="message"> Message:</label>
               <textarea name="message" id="message" placeholder="Enter Your Message"></textarea>

               <button className="btn">send It</button>


              </form>
            </div>
        </section>
    )
}