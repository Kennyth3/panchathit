export default function Register() {
    return (
        <div className="auth-page">
          <form className="auth-card">
             <h1> Register </h1> 
             <input  placeholder="กรุณาเขียนชื่อขนามสกุล"/>
             <input  placeholder="Email"  type="email"/>
             <input  placeholder="Password"/>

             <button> Register </button>

          </form>
        </div>
    );
}