import { useAuth0 } from "@auth0/auth0-react"



const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0()
    if(isLoading){
        return <section>
            <h1>Loading...</h1>
        </section>
    }
    if(error){
        return <section>
            <h1>{error.message}</h1>
        </section>
    }
    return <>{children}</>
}

export default AuthWrapper