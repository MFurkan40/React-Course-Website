function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center bg-warning p-3 fixed-bottom">
        <p className="text-light text-center mt-3">
          Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
}

export default Footer;
