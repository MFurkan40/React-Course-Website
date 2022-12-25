import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

//! useLocation Hooku import edilmelidir.

const PersonDetail = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  const navigate = useNavigate();

  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // const { state: person } = useLocation();

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // else içine son işlme konularak setloading kulanılmadan yapılabilir.
  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <div className="mx-auto">
        <h3 className="text-center">Data Loading</h3>
      </div>
    );
  }

  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3 className="display-5 mb-4">
          {person?.first_name} {person?.last_name}
        </h3>
        <img src={person?.avatar} alt={`img${id}`} />
        <p className="display-6 my-3">{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
    );
  }
};
export default PersonDetail;
