import ItensOffcanvas from "../atoms/ItensOffcanvas"

function Offcanvas(){
    return (

        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <ItensOffcanvas itemName="Dashboard"/>
            <ItensOffcanvas itemName="Atendimento"/>
            <ItensOffcanvas itemName="Criativo"/>
            <ItensOffcanvas itemName="Distribuição"/>
            <ItensOffcanvas itemName="Relatórios"/>
            <ItensOffcanvas itemName="Cadastros"/>
            <ItensOffcanvas itemName="Configurações"/>
          </ul>
        </div>
    )
}

export default Offcanvas