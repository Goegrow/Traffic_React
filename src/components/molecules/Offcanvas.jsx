import ItensOffcanvas from "../atoms/ItensOffcanvas"

function Offcanvas(){
    
    return (

        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <ItensOffcanvas itemName="Dashboard" iconName="house"/>
            <ItensOffcanvas itemName="Atendimento" iconName=""/>
            <ItensOffcanvas itemName="Criativo" iconName="palette"/>
            <ItensOffcanvas itemName="Distribuição" iconName=""/>
            <ItensOffcanvas itemName="Relatórios" iconName=""/>
            <ItensOffcanvas itemName="Cadastros" iconName=""/>
            <ItensOffcanvas itemName="Configurações" iconName=""/>
          </ul>
        </div>
    )
}

export default Offcanvas