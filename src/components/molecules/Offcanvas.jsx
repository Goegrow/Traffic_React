import ItensOffcanvas from "../atoms/ItensOffcanvas"

function Offcanvas(){

    return (

        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <ItensOffcanvas itemName="Dashboard" iconName="house" className="bi"/>
            <ItensOffcanvas itemName="Atendimento" iconName="user" className="bi"/>
            <ItensOffcanvas itemName="Criativo" iconName="palette" className="bi"/>
            <ItensOffcanvas itemName="Distribuição" iconName="arrow-left-right" className="bi"/>
            <ItensOffcanvas itemName="Relatórios" iconName="chart-column" className="bi"/>
            <ItensOffcanvas itemName="Cadastros" iconName="user-cog" className="bi"/>
            <ItensOffcanvas itemName="Configurações" iconName="settings" className="bi"/>
          </ul>
        </div>
    )
}

export default Offcanvas