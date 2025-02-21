import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error, fetchData } = useFetch()

    //GET
    useEffect(() => {
        fetchData(url, 'GET')
    }, [])

    //POST
    /*
    const body = {
        title: 'boo',
        body: 'far',
        userId: 1
    }

    useEffect(() => {
        fetchData(url, 'POST', body)
    }, [])
    */

    //PUT
    /*
    const url = 'https://jsonplaceholder.typicode.com/users/1' //tiene que tener el id

    const body = {
        title: 'boo',
        body: 'far',
        userId: 1
    }

    useEffect(() => {
        fetchData(url, 'PUT', body)
    }, [])
    */

    //DELETE
    /*
    const url = 'https://jsonplaceholder.typicode.com/users/1' //tiene que tener el id
    useEffect(() => {
        fetchData(url, 'DELETE')
    }, [])
    */




    return (
        <>
            <h1>Lista de usuarios:</h1>
            {isLoading
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(users => {
                                    return (
                                        <tr key={users.id}>
                                            <th scope="row">{users.id}</th>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.website}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}
