import DocumentTitle from "../../components/DocumentTitle";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { Loader }  from "../../components/Loader/Loader";
import { useState, useEffect } from 'react';



export default function LogInPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 300)
      }, [ setLoading ])
    return ( 

        <div>
             {loading && <Loader />}
            <DocumentTitle>Login</DocumentTitle>
            <LogInForm />
        </div>
    );
}