import Card from "../componentes/Card/Card";
import DadosClientes from "../Dados/DadosClientes";

function createCard(Clientes){
    return<Card 
    key={Clientes.id}
    nome={Clientes.Nome}
    telefone={Clientes.Telefonee}
    cpf={Clientes.CPF}
    rg={Clientes.RG}
    uf={Clientes.UF}
    orgaoEspeditor={Clientes.OrgaoEspeditor}
    dataAniversario={Clientes.DataAniversario}
    cep={Clientes.Cep}
    rua={Clientes.Rua}
    numero={Clientes.Numero}
    complemento={Clientes.Complemento}
    bairro={Clientes.Bairro}
    cidade={Clientes.Cidade}
    estado={Clientes.Estadoe}/>
}

function Clientes() {

    return (
        <div>
            {DadosClientes.map(createCard)}
        </div>

        

    )
}
export default Clientes;