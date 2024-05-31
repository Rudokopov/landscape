import "./About.scss";

function About() {
  return (
    <div className="about">
      <h2>Наши услуги</h2>
      <list>
        <li>
          <h3>Озеленение</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo itaque
            facere ipsum debitis ut corporis blanditiis culpa, placeat
            laboriosam maxime accusantium cum perspiciatis eius excepturi
            officia unde molestiae doloribus esse!
          </p>
        </li>
        <li>
          <h3>Благоустройство</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            tenetur delectus veritatis illum amet autem quis? Placeat illo
            corporis nam adipisci nostrum quo harum fugit, amet est consequuntur
            corrupti nesciunt.
          </p>
        </li>
        <li>
          <h3>Магазин с выгодными предложениями</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            incidunt id iure atque mollitia fuga, animi facere libero quibusdam
            delectus eius odit nihil excepturi voluptas ipsum rerum ipsam
            explicabo placeat.
          </p>
          <button>
            <a>В магазин</a>
          </button>
        </li>
      </list>
    </div>
  );
}

export default About;
