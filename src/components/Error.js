import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opp's Something Went Wrong🫡</h1>
            <p>
               { err.status}: {err.statusText}
            </p>
        </div>
    )
}
export default Error;