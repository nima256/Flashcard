import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div>
      Sth went wrong
      <p>{error.message || error.data}</p>
    </div>
  );
}

export default Error;
