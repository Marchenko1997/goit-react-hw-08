import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Loader }  from "../../components/Loader/Loader";
import { useState, useEffect } from 'react';

export default function RagisterPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 300)
      }, [ setLoading ])
    return (
        <div>
            {loading && <Loader />}
            <DocumentTitle>Registration</DocumentTitle>
            <RegisterForm />
        </div>
    );
}