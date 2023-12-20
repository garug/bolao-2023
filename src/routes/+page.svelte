<script>
  export let data;

  const concurso_link =
    "https://www.loteriasonline.caixa.gov.br/silce-web/?gclid=Cj0KCQiAm4WsBhCiARIsAEJIEzU6Fx6ZX8jPwqqHC8awKJnN5Wgmob31IpvNs5vnqd3QpeTlGUpgQRYaAoMyEALw_wcB#/mega-sena/especial";

  console.log(data);
</script>

<section class="wrapper">
  <div class="progress">
    <div class="bar lines" />
    <div class="bar approved" style:width={data.approved + "%"} />
    <div class="bar pending" style:width={data.pending + "%"} />
  </div>
	<p>✨✨✨ {data.refused} pessoas escolheram não participar. Acredito que esse número aumente nossas chances ✨✨✨</p>
  <section class="info">
    <h1>Informações:</h1>
    <article class="main">
      <h1>O que é um bolão?</h1>
      <p>
        É uma aposta em grupo, dessa forma a chance de ganhar aumenta 🥳
      </p>
      <p>
        A caixa tem desde 2012 o bolão de forma oficial, tornando uma opção
        segura porque cada um tem seu comprovante. Eu sempre escrevo o nome do
        participante na parte de trás do comprovante(Igual faziam os incas 👴 com o cheque), dessa forma a caixa aceita
        apenas aquela pessoa retirar o prêmio (É o que me disseram)
      </p>
    </article>
    <div class="infos">
      <article>
        <h1>Do concurso:</h1>
        <p>
          nº 2670 (<a href={concurso_link} target="_blank">
            Link do site da caixa
          </a>)
        </p>
        <p>Encerramento das Apostas: 31/12/2023 17h00</p>
        <p>Data do Sorteio: 31/12/2023 20h00</p>
        <p>Estimativa de prêmio: R$ 570.000.000,00</p>
      </article>
      <article>
        <h1>Do bolão:</h1>
        <p><b>Número de cotas:</b> 100</p>
        <p><b>Valor da cota:</b> R$ 10,50</p>
        <p><b>Estimativa do prêmio por cota:</b> R$ 5.700.000,00</p>
        <p><b>Cotas disponíveis:</b> {100 - (data.pending || 0) - data.approved}</p>
        <hr />
        <p class="alert">
          🚨 Agendamentos são válidos até dia 29, <br />
          depois disso fez o pix até o encerramento das apostas<br />
          ta participando
        </p>
      </article>
    </div>
    <article class="join">
      <h1>Quer participar?</h1>
      <p>Você deveria saber onde me achar 🕵️‍♂️</p>
      <p><b>Pix para pagamento:</b> eu@garug.dev</p>
    </article>
    <hr />
    <p class="credits">made with ❤️ <span>and greed</span><br />by garug</p>
  </section>
</section>

<style>
  :global(body) {
    margin: 0;
    background-color: #1a1d1e;
    font-family: Lato;
    color: #c0c5ba;
  }

  h1 {
    color: #008f58;
  }

  hr {
    outline: none;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    height: 1px;
  }

  .wrapper {
		padding: 16px;
		box-sizing: border-box;
    min-height: 100svh;
    min-width: 100svw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .progress {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    position: relative;
    overflow: hidden;
  }

	@media (min-width: 1024px) {
		.progress {
			width: 80%;
		}
	}

  .bar {
    display: block;
    position: relative;
    height: 27px;
  }

  .bar.lines {
    width: 100%;
    background: repeating-linear-gradient(
      to right,
      transparent 0 calc(1% - 1px),
      rgba(0, 0, 0, 0.05) calc(1% - 1px) 1%
    );
    position: absolute;
    z-index: 1;
  }

  .bar.approved {
    background-color: #008f58;
  }

  .bar.pending {
    background-color: rgb(219, 226, 153);
  }

  .info {
    padding: 16px;
		width: 100%;
		box-sizing: border-box
  }

	@media (min-width: 1024px) {
		.info {
			width: 40%
		}
	}

  .alert {
    text-align: center;
  }

  .infos {
    display: flex;
    gap: 16px;
		justify-content: space-between;
		flex-direction: column;
  }

	@media (min-width: 768px) {
		.infos {
			flex-direction: row;
		}
	}

  .info h1 {
    width: 100%;
  }

  .join {
    text-align: center;
  }

  .credits {
    text-align: center;
  }

  .credits span {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.1);
    font-size: 11px;
  }
</style>
