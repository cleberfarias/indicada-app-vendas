function Card(propos) {
    return (
        <div>
            <h3>{propos.nome}</h3>
            <p>{propos.telefone}</p>
            <p>{propos.cpf}</p>
            <p>{propos.rg}</p>
            <p>{propos.uf}</p>
            <p>{propos.orgaoEspeditor}</p>
            <p>{propos.dataAniversario}</p>
            <p>{propos.cep}</p>
            <p>{propos.rua}</p>
            <p>{propos.numero}</p>
            <p>{propos.complemento}</p>
            <p>{propos.bairro}</p>
            <p>{propos.cidade}</p>
            <p>{propos.estado}</p>
        </div>


    )

}
export default Card;
