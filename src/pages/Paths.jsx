import { Link, useNavigate, Outlet } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with DevEngines
      </h1>

      <p className="fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt
        minus fuga quae. Doloremque, provident nulla. At sit totam culpa
        consequatur deserunt omnis aliquid et sequi ipsum ab, animi est
        assumenda quaerat molestias repellat numquam recusandae suscipit
        voluptates cum magnam!
      </p>
      <div>
        <Link className="btn btn-danger w-50" to="">
          Fullstack
        </Link>
        <button
          className="btn btn-warning w-50"
          onClick={() => navigate("aws")}
        >
          Aws-Devops
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
