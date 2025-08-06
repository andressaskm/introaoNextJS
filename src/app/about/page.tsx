import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function About() {
  return (
    <div>
      {/* <NavBar label1="Produtos" label2="Adminitradores" label3="Time"/> */}
      <h1 className="text-center font-bold text-3xl mb-5 uppercase mt-5 text-amber-900">
        Sobre:
      </h1>
      <p className=" text-justify max-w-6xl mx-auto px-4 mt-3">
        "Twin Peaks" é uma série de televisão criada por David Lynch e Mark
        Frost, ambientada na fictícia cidade de Twin Peaks, no estado de
        Washington. A história começa com o chocante assassinato de Laura
        Palmer, uma jovem popular e aparentemente perfeita, desencadeando uma
        investigação liderada pelo agente do FBI Dale Cooper e pelo xerife da
        cidade, Harry Truman. A trama se aprofunda nos segredos obscuros da
        cidade, revelando que a fachada de tranquilidade esconde mistérios e
        corrupção. O agente Cooper, com sua abordagem peculiar e métodos pouco
        ortodoxos, tenta desvendar o assassinato, enquanto se depara com
        personagens excêntricos e situações sobrenaturais.{" "}
      </p>
      
      <div>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-5 uppercase">
          Personagens:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <Card
            title="Dale Cooper"
            description="Dale Cooper é o charmoso investigador do FBI, amante de café e grande admirador do Tibet.
                    Ele se comunica todos os dias com a sua secretária de confiança, Diane, usando um gravador."
            imageURL="https://i.pinimg.com/736x/f1/d2/89/f1d289e0c5d347e6adc51100e290286e.jpg"
            category={["Investigador", "Complexo"]}
          />

          <Card
            title="Audrey Horne"
            description="Audrey é uma estudante curiosa que sonha em viver um grande amor e sair de
                    Twin Peaks. Seu pai é dono do maior hotel da cidade. Ela se apaixonou pelo Agente Especial
                    Dale Cooper."
            imageURL="https://i.pinimg.com/1200x/4e/87/63/4e8763947407f82030e4cf6ce720a9fb.jpg"
            category={["Misterioso", "Complexo"]}
          />

          <Card
            title="Shelly Johnson"
            description="Shelly trabalha no R.R. Diner. Ela é casada com Leo, mas vive um relacionamento
                    extra conjugal com Bobby Briggs."
            imageURL="https://i.pinimg.com/1200x/f9/98/46/f9984624bdc05581972f6b0fc5f007d2.jpg"
            category={["Complexo", "Ambíguo"]}
          />

          <Card
            title="Harry Truman"
            description="Chefe de polícia da cidade de Twin Peaks, que auxilia o agente do FBI Dale Cooper na investigação do assassinato de Laura Palmer e em outros casos misteriosos. Ele é conhecido por sua amizade com Cooper e sua dedicação à cidade."
            imageURL="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRj5hetpbF0TwGaxoxcvtG2y-owQJphl3sJymPZ0tpnQ6Njd8q-0LHuM2z8BeqRMr2FWaQjK9MenJZm-01-wwqK2buZKJOx23NrUsFOcyaQ"
            category={["Investigador"]}
          />

          <Card
            title="Log Lady"
            description="Seu nome verdadeiro é Margaret Lanterman. Ela é conhecida por andar sempre com um tronco de árvore, que ela afirma ser capaz de se comunicar com ela e prever eventos."
            imageURL="https://images.seattletimes.com/wp-content/uploads/2015/09/9efd40ea-664a-11e5-ac80-4d3e4b92ce01.jpg?d=780x583"
            category={["Ambíguo", "Sobrenatural"]}
          />

          <Card
            title="Tommy 'Hawk' Hill"
            description=" Hawk é conhecido por sua conexão com a espiritualidade nativa americana e sua crença na existência do 'Black Lodge' e 'White Lodge', lugares sobrenaturais que influenciam a cidade."
            imageURL="https://elcadillacnegro.com/wp-content/uploads/2012/05/deputy-tommy-hawk-hill1.jpg?w=500"
            category={["Investigador"]}
          />
        </div>
      </div>
    </div>
  );
}
