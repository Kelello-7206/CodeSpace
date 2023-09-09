import { useRouter } from "next/router";

function SelectedClientPage() {

    const router = useRouter()
        console.log(router.query)
    
    return (
        <div>
            <h1>Selected Client Page</h1>
        </div>
    );
}

export default SelectedClientPage;