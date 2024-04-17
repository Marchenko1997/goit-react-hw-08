import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export default function RagisterPage() {
    return (
        <div>
            <DocumentTitle>Registration</DocumentTitle>
            <RegisterForm />
        </div>
    );
}