import Image from "next/image";
//<button type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
export default function Home() {
  return (
    <div className="nav">
      <p>oal</p>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>Sua Sobremesa Favorita</h1>
        <div>
          <a href="/cadrastro">
            <button style={buttonStyle}>Cadastro</button>
          </a>

          <a href="/login">
            <button style={buttonStyle} type="submit">Login</button>
          </a>
        </div>
      </header>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Imagem do mousse de limão */}
        <img src="https://espaconatelie.com.br/wp-content/cache/seraphinite-accelerator/s/m/d/img/c6ff29248c3d402fec81eb9b9e278eba.1d675.jpeg" alt="Mousse de Limão" style={{ width: "300px", borderRadius: "10px" }} />
        {/* Barra de pesquisa e opções */}

        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Pesquise aqui!"
              style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1, marginRight: "10px" }}
            />
            <button style={buttonStyle}>Buscar</button>
          </div>
          {/* Outros sabores */}
          <div>

            <h3>Mousse de Morango</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://static.itdg.com.br/images/1200-630/718bdb18cca072a9243d1ddf156bbbd4/328782-original.jpg" alt="Mousse de Morango" style={imageStyle} />
          </div>
          <div>
            <h3>Mousse de Maracujá</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img src="https://static.itdg.com.br/images/360-240/8fed8f60d3c8e3990396e2478cbc7f2a/shutterstock-1905617575-1-.jpg" alt="Mousse de Maracujá" style={imageStyle} />
          </div>
        </div>
      </div>

    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#ff66b2",
  border: "none",
  color: "white",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 5px"
};

const imageStyle = {
  width: "150px",
  borderRadius: "10px",
  marginTop: "10px"
};

