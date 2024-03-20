
const Register = () => {
  
    return(
        <>
        <h1>Register</h1>
        <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
        </>
    )
    
}

export default Register 