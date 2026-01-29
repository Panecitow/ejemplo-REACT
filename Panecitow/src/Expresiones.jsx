function Expresiones() {
    const nombre='Alfonsini'
    const apellidos='Banini Gusini'
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>My name is {nombre} y mis apellidos insanos son {apellidos}</h3>
            <Lista/>
            </div>
    )
}

function Lista(){
    const users=[
        {id:1, name: 'Alfonsini', role: 'Web Developer'},
        {id:2, name: 'Yeyeii', role: 'Frontend Developer'},
        {id:3, name: 'Pozole', role: 'Backend Developer'}
        ]
    return(
        
        <div>
            <table>
                <tbody>
                    <tr>

                    <th>Name</th>
                    <th>Role</th>
                    </tr>
                    
                        {users.map(function(user,index){
                            return(
                                <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                            </tr>)
                        }) 
                        }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Expresiones