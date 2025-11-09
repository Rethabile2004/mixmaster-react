import axios from "axios";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
export const action= async({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData);

  try{
    const response=await axios.post(newsletterUrl,data);
    console.log(response);
    toast.success(response.data.msg)

  }catch(error){
    toast.error(error?.response?.data?.msg);    
    return error;
  }
  return redirect('/')
}

const Newsletter = () => {
  return (
    <Form className="form" method="POST">
      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our news letter
      </h3>
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" name="name"  id="name" className="form-input" defaultValue='Rethabile' />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">last Name</label>
        <input type="text" name="lastName" required id="lastName" className="form-input" defaultValue='Siase' />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="text" name="email"required  id="email" className="form-input" defaultValue='test@test.com' />
      </div>
      
      <button className="btn btn-block" style={{marginTop:'0.5rem'}}>Submit</button>
    </Form>
  );
};
export default Newsletter;
