function Contacto(){

    
    return (
        <form className="loginForm" action="loginUser">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder='Name'/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder='Email'/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required placeholder="Password" />
            <button type="submit">Continuar</button>
        </form>
    );
}
export default Contacto;